const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.nav-list');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.addEventListener('click',e=>{if(e.target.matches('a')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}});document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.focus();}});}
document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear();});
const whatsapp=document.createElement('a');
whatsapp.className='whatsapp-float';
whatsapp.href='https://wa.link/mdenq1';
whatsapp.target='_blank';
whatsapp.rel='noopener noreferrer';
whatsapp.setAttribute('aria-label','Contact Mahadev on WhatsApp');
whatsapp.title='Contact on WhatsApp';
whatsapp.innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.04 3A12.8 12.8 0 0 0 5.2 22.62L3.5 29l6.52-1.66A12.82 12.82 0 1 0 16.04 3Zm0 2.17a10.64 10.64 0 1 1-5.42 19.8l-.4-.24-3.87.99 1.03-3.77-.26-.41a10.63 10.63 0 0 1 8.92-16.37Zm-4.52 4.78c-.23 0-.61.09-.93.44-.32.35-1.22 1.2-1.22 2.91 0 1.72 1.25 3.38 1.42 3.61.18.23 2.46 3.76 5.97 5.27.83.36 1.48.57 1.99.73.84.27 1.6.23 2.2.14.67-.1 2.06-.84 2.35-1.65.3-.81.3-1.51.21-1.65-.09-.15-.32-.24-.67-.41-.35-.18-2.06-1.02-2.38-1.14-.32-.12-.55-.18-.79.17-.23.36-.9 1.14-1.1 1.37-.21.24-.41.27-.76.09-.35-.17-1.48-.54-2.81-1.74a10.52 10.52 0 0 1-1.95-2.43c-.2-.35-.02-.54.16-.71.16-.16.35-.41.53-.62.17-.2.23-.35.35-.58.12-.24.06-.44-.03-.62-.09-.17-.79-1.89-1.08-2.59-.28-.68-.57-.59-.79-.6h-.67Z"/></svg>';
document.body.appendChild(whatsapp);
if(location.pathname==='/'||location.pathname.endsWith('/index.html')){
  const heroActions=document.querySelector('.hero .actions');
  if(heroActions){
    const heroWhatsApp=document.createElement('a');
    heroWhatsApp.className='button whatsapp';
    heroWhatsApp.href='https://wa.link/mdenq1';
    heroWhatsApp.target='_blank';
    heroWhatsApp.rel='noopener noreferrer';
    heroWhatsApp.textContent='WhatsApp us';
    heroActions.insertBefore(heroWhatsApp,heroActions.lastElementChild);
  }
}

const legalLinks=[['About','/about/'],['Contact','/contact/'],['Privacy','/privacy-policy/'],['Terms','/terms/'],['Disclaimer','/disclaimer/']];
let footer=document.querySelector('.site-footer');
if(!footer){
  footer=document.createElement('footer');
  footer.className='site-footer';
  footer.innerHTML='<div class="container"><div class="copyright">© <span data-year></span> Mahadev. Informational content only.</div></div>';
  document.body.insertBefore(footer,document.querySelector('script[src="/assets/js/main.js"]'));
  footer.querySelector('[data-year]').textContent=new Date().getFullYear();
}
const copyright=footer.querySelector('.copyright');
if(copyright&&!footer.querySelector('.legal-links')){
  const legal=document.createElement('nav');
  legal.className='legal-links';
  legal.setAttribute('aria-label','Legal and company information');
  legal.innerHTML=legalLinks.map(([label,url])=>`<a href="${url}">${label}</a>`).join('');
  copyright.before(legal);
}

document.addEventListener('click',event=>{
  const link=event.target.closest('a[href*="wa.link"],a[data-whatsapp-contact]');
  if(link&&typeof window.gtag==='function'){
    window.gtag('event','whatsapp_click',{link_url:link.href,page_path:location.pathname});
  }
});
