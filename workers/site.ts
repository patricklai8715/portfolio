interface Env { ASSETS: { fetch(request: Request): Promise<Response> }; PORTFOLIO_EVENTS?: { writeDataPoint(point: { indexes: string[]; blobs: string[]; doubles: number[] }): void } }
const events=new Set(['portfolio_visit','project_view','demo_click','upwork_click']);
export default {
 async fetch(request:Request,env:Env):Promise<Response>{
  const url=new URL(request.url);
  if(url.pathname!=='/api/events')return env.ASSETS.fetch(request);
  if(request.method!=='POST')return new Response(null,{status:405});
  if(request.headers.get('origin')!==url.origin)return new Response(null,{status:403});
  if(Number(request.headers.get('content-length')||0)>512)return new Response(null,{status:413});
  const text=await request.text();if(text.length>512)return new Response(null,{status:413});
  let body;try{body=JSON.parse(text)}catch{return new Response(null,{status:400})}
  if(!events.has(body.event)||typeof body.path!=='string'||!/^\/(?:upwork\/)?(?:projects\/(?:shein|crm|ones-performance)\/)?$/.test(body.path))return new Response(null,{status:400});
  const project=['shein','crm','ones-performance'].includes(body.project)?body.project:'';
  if(!env.PORTFOLIO_EVENTS)return new Response(null,{status:503});
  env.PORTFOLIO_EVENTS.writeDataPoint({indexes:[body.event],blobs:[body.path,project],doubles:[1]});
  return new Response(null,{status:204,headers:{'Cache-Control':'no-store'}});
 }
};
