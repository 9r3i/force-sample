window.addEventListener('error',function(e){
  let errorText=[
    e.message,
    'URL: '+e.filename,
    'Line: '+e.lineno+', Column: '+e.colno,
    'Stack: '+(e.error&&e.error.stack||'(no stack trace)'),
  ].join('\n');
});
(async function(n,h,c,f){
  let ftag=document.getElementById(f),
  fname='force/virtual/force.js',
  fscript=localStorage.getItem(fname),
  cnf=JSON.parse(document.getElementById(c).textContent);
  if(!fscript){
    fscript=await fetch(cnf.force.file).then(r=>r.text());
    localStorage.setItem(fname,fscript);
  }
  ftag.textContent=fscript;
  const app=(new Force).app(n,h,cnf);
  await app.init();
  console.log("A Force app has been loaded, namespace: "
    +app.namespace);
})(
  'website',
  'https://9r3i.github.io/force-website',
  'website-config',
  'force-script'
);
