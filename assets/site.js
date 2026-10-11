/* Topographic contour background: value noise traced with marching squares. */
(function(){
  const c=document.getElementById('contours'); if(!c) return;
  const ctx=c.getContext('2d');
  function hash(x,y){const s=Math.sin(x*127.1+y*311.7)*43758.5453;return s-Math.floor(s)}
  function noise(x,y){const xi=Math.floor(x),yi=Math.floor(y),xf=x-xi,yf=y-yi,u=xf*xf*(3-2*xf),v=yf*yf*(3-2*yf);
    const a=hash(xi,yi),b=hash(xi+1,yi),c2=hash(xi,yi+1),d=hash(xi+1,yi+1);return a+(b-a)*u+(c2-a)*v+(a-b-c2+d)*u*v}
  function field(x,y){return noise(x,y)*.6+noise(x*2.1,y*2.1)*.28+noise(x*4.3,y*4.3)*.12 + y*.06}
  function draw(){
    const r=c.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,2);
    c.width=r.width*dpr;c.height=r.height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,r.width,r.height);
    const cell=10,cols=Math.ceil(r.width/cell)+1,rows=Math.ceil(r.height/cell)+1,sc=.0042,g=[];
    for(let j=0;j<=rows;j++){g[j]=[];for(let i=0;i<=cols;i++)g[j][i]=field(i*cell*sc+3.2,j*cell*sc+1.7)}
    for(let k=1;k<22;k++){
      const lv=.1+k*.045;ctx.beginPath();
      ctx.strokeStyle=k%5===0?'rgba(207,168,102,.55)':'rgba(207,168,102,.22)';ctx.lineWidth=k%5===0?1.1:.7;
      for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){
        const a=g[j][i],b=g[j][i+1],cc=g[j+1][i+1],d=g[j+1][i];
        const idx=(a>lv?8:0)|(b>lv?4:0)|(cc>lv?2:0)|(d>lv?1:0); if(idx===0||idx===15) continue;
        const x=i*cell,y=j*cell,t=(p,q)=>(lv-p)/(q-p);
        const T=[x+cell*t(a,b),y],R=[x+cell,y+cell*t(b,cc)],B=[x+cell*t(d,cc),y+cell],L=[x,y+cell*t(a,d)];
        const segs={1:[L,B],2:[B,R],3:[L,R],4:[T,R],5:[T,L,B,R],6:[T,B],7:[T,L],8:[T,L],9:[T,B],10:[T,R,L,B],11:[T,R],12:[L,R],13:[B,R],14:[L,B]}[idx];
        for(let s=0;s<segs.length;s+=2){ctx.moveTo(segs[s][0],segs[s][1]);ctx.lineTo(segs[s+1][0],segs[s+1][1])}
      }
      ctx.stroke();
    }
  }
  draw(); let t; window.addEventListener('resize',()=>{clearTimeout(t);t=setTimeout(draw,150)});
})();

/* Enquiry form: validate in the page. Connect FORM_ENDPOINT to the CRM before launch. */
(function(){
  const FORM_ENDPOINT=null;
  const f=document.getElementById('enquiry'); if(!f) return;
  const msg=document.getElementById('form-msg'),err=document.getElementById('form-err');
  f.addEventListener('submit',async e=>{
    e.preventDefault();msg.hidden=true;err.hidden=true;
    const name=f.name.value.trim(),email=f.email.value.trim();
    if(!name){err.textContent='Please add your name so we know who to reply to.';err.hidden=false;f.name.focus();return}
    if(!/^\S+@\S+\.\S+$/.test(email)){err.textContent='Please enter a valid email address, for example jane@example.co.uk.';err.hidden=false;f.email.focus();return}
    if(!f.consent.checked){err.textContent='Please tick the consent box so we can reply to your enquiry.';err.hidden=false;f.consent.focus();return}
    if(!FORM_ENDPOINT){msg.textContent='Thank you, '+name.split(' ')[0]+'. Your details are complete. (Preview build: this form is not yet connected, so nothing has been sent.)';msg.hidden=false;return}
    try{const r=await fetch(FORM_ENDPOINT,{method:'POST',body:new FormData(f)});if(!r.ok)throw 0;
      msg.textContent='Thank you, '+name.split(' ')[0]+'. Your enquiry has reached our UK office. We will reply within one working day.';msg.hidden=false;f.reset()}
    catch(_){err.textContent='Your enquiry did not send. Please try again, or email hello@atabuild.co directly.';err.hidden=false}
  });
})();
