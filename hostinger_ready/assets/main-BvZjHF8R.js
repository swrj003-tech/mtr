import"./modulepreload-polyfill-wMinxHhO.js";var e=`
  <svg viewBox="0 0 240 60" class="h-10 md:h-12 w-auto logo-glow" aria-label="MRT International">
    <text x="0" y="45" font-family="Manrope, sans-serif" font-weight="800" font-size="40" fill="#003366" letter-spacing="-1.5">MR</text>
    <text x="68" y="45" font-family="Manrope, sans-serif" font-weight="800" font-size="40" fill="#ff8c00" letter-spacing="-1.5">T</text>
    <path d="M98 15L112 5L126 15" fill="none" stroke="#ff8c00" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M112 5V22" fill="none" stroke="#ff8c00" stroke-width="5" stroke-linecap="round"/>
    <text x="0" y="58" font-family="Manrope, sans-serif" font-weight="600" font-size="10" fill="#003366" opacity="0.6" letter-spacing="4">INTERNATIONAL</text>
  </svg>
`,t={1:`home-kitchen`,2:`beauty-personal-care`,3:`health-wellness`,4:`pet-supplies`,5:`baby-kids-essentials`,6:`electronics-accessories`,7:`sports-fitness`},n=[`home-kitchen-carousel`,`health-wellness-carousel`,`beauty-personal-care-carousel`,`pet-carousel`,`baby-kids-essentials-carousel`,`electronics-carousel`,`sports-carousel`],r=class{constructor(){document.body.classList.add(`loaded`),document.body.style.opacity=`1`,this.lenis=null,this.lenisDriverInitialized=!1,this.lenisRafId=null,this.lenisTicker=null,this.quickViewCleanupPending=!1,this.previousBodyOverflow=``,this.globalEventsBound=!1,window.innerWidth>768&&(this.lenis=new Lenis({duration:1.2,easing:e=>Math.min(1,1.001-2**(-10*e)),smoothWheel:!0,smoothTouch:!1}),typeof gsap<`u`&&(gsap.ticker.add(e=>{this.lenis.raf(e*1e3)}),gsap.ticker.lagSmoothing(0)));let e=new URLSearchParams(window.location.search),n=e.get(`category`)||e.get(`c`),r=e.get(`id`);this.currentCategory=n||t[r]||`home-kitchen`,this.isBoutique=window.location.pathname.includes(`category.html`),this.injectLogos(),this.init(),this.allProducts=[],this.allCategories=[],window.openQuickView=e=>this.openQuickView(e),window.closeQuickView=()=>this.closeQuickView(),window.openReviewModal=(e,t)=>this.openReviewModal(e,t),window.mrtApp=this}async init(){try{let e=Array.from(document.querySelectorAll(`button`)).find(e=>{let t=e.textContent||``;return t.includes(`Explore`)||t.includes(`Collections`)})||document.querySelector(`.hero-btn`)||document.querySelector(`.bg-primary.text-on-primary`);e&&e.addEventListener(`click`,e=>{e.preventDefault();let t=document.getElementById(`categories`)||document.querySelector(`.peek-container`)||document.getElementById(`category-carousels-container`);this.scrollToTarget(t)});let t=document.getElementById(`avory-categories-grid`);if(t)try{t.innerHTML=(await(await fetch(`/api/categories`)).json()).slice(0,8).map(e=>`
            <a href="category.html?c=${e.slug}" class="group relative aspect-[3/4.5] md:aspect-[4/5] overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-gray-100 transition-all duration-700 hover:shadow-2xl">
              <img src="${e.image||`/assets/categories/`+e.slug+`.png`}" alt="${e.name}" class="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" onerror="this.src='/assets/products/premium_product_placeholder.png'">
              <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-8">
                <h3 class="text-lg md:text-2xl font-headline italic text-white mb-1 md:mb-2">${e.name}</h3>
                <span class="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-primary transition-colors">Explore Collection</span>
              </div>
            </a>
          `).join(``)}catch(e){console.error(`Avory Grid render failed:`,e)}window.location.search.includes(`c=`)?this.initBoutique():(this.renderDynamicHomepage(),this.renderHomepageTestimonials()),this.initHeaderScroll(),this.initScrollReveal(),this.animateReveals(),this.bindEvents()}catch(e){console.error(`MRTApp Initialization Error:`,e)}}injectLogos(){document.querySelectorAll(`[data-logo]`).forEach(t=>{t.innerHTML=e})}async initBoutique(){let e=document.getElementById(`category-products-container`);if(e)try{let t=await fetch(`/api/categories/${this.currentCategory}?_t=${Date.now()}`);if(!t.ok)throw Error(`Category or products not found`);let n=await t.json(),r=n.products||[],i=n.theme;if(this.allProducts=r,this.currentId=n.id,this.currentCategoryImage=n.image,i){this.applyTheme(i);let t=document.getElementById(`seo-title`),a=document.getElementById(`seo-intro`);t&&(t.innerText=i.seoTitle||`Top 10 Best ${i.title} Products (2026)`,t.classList.add(`text-gray-900`,`font-black`)),a&&(a.innerText=i.seoIntro||`Discover the most useful, trending, and top-rated ${i.title.toLowerCase()} products carefully selected for quality and value.`,a.classList.add(`text-gray-800`,`font-medium`));let o={name:n.name,slug:n.slug,theme:n.theme},s=r.map(e=>({...e,category:e.category||o}));this.renderBoutiqueProducts(s,this.currentCategory,e)}else e.innerHTML=`<p class="col-span-full text-center serif italic opacity-50 py-20 animate-pulse text-on-surface">Synchronizing Collection for "${this.currentCategory}"...</p>`}catch(t){console.error(`Boutique sync failed:`,t),e.innerHTML=`<p class="col-span-full text-center serif italic opacity-50 py-20 text-on-surface">Data sync failed. Please check connection.</p>`}finally{typeof ScrollTrigger<`u`&&ScrollTrigger.refresh()}}applyTheme(e){let t=document.documentElement,n=e.primary||`#914d00`,r=e.secondary||`#f28c28`;t.style.setProperty(`--category-primary`,n),t.style.setProperty(`--category-secondary`,r);let i=n.startsWith(`#`)?`rgba(${parseInt(n.slice(1,3),16)}, ${parseInt(n.slice(3,5),16)}, ${parseInt(n.slice(5,7),16)}, 0.15)`:n;t.style.setProperty(`--category-primary-glow`,i);let a=(e,t)=>{let n=document.getElementById(e);n&&(n.textContent=t)};a(`seo-title`,e.seoTitle||`Top 10 Best ${e.title} Products (2026)`),a(`seo-intro`,e.seoIntro||`Discover the most useful, trending, and top-rated ${e.title.toLowerCase()} products carefully selected for quality and value.`),this.updateSEO(e.title,e.seoIntro)}updateSEO(e,t,n=!1,r=null){document.title=`${e} | MRT International`;let i=document.querySelector(`meta[name="description"]`);i&&(i.content=t||`Explore ${e} at MRT International.`);let a={};a=n?{"@context":`https://schema.org/`,"@type":`Product`,name:e,description:t,image:r,brand:{"@type":`Brand`,name:`MRT International`}}:{"@context":`https://schema.org`,"@type":`Organization`,name:`MRT International Holding LLC`,url:window.location.origin};let o=document.querySelector(`#seo-json-ld`);o||(o=document.createElement(`script`),o.type=`application/ld+json`,o.id=`seo-json-ld`,document.head.appendChild(o)),o.textContent=JSON.stringify(a)}createProductCard(e,t={}){try{let n=e.name||`Premium Product`,r=e.shortBenefit||e.description||``,i=e.image||``;if(!i||i.includes(`placeholder`)){let e=n.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/(^-|-$)/g,``);i=`/assets/products/${{"vegetable-chopper":`vegetable-chopper.png`,"electric-spin-scrubber":`electric_spin_scrubber.png`,"pet-hair-remover-roller":`pet-hair-remover-roller.png`,"self-cleaning-grooming-brush":`self-cleaning-grooming-brush.png`,"baby-nail-trimmer":`baby-clipper-premium.png`}[e]||e+`.png`}`}let a=e.currency||`USD`,o={USD:`$`,INR:`₹`,AED:`د.إ`,EUR:`€`,GBP:`£`,JPY:`¥`,CAD:`CA$`,AUD:`A$`,SGD:`S$`,SAR:`﷼`}[a]||a+` `,s=e.price&&parseFloat(e.price)>0,c=s?parseFloat(e.price).toFixed(2):null,l=e.originalPrice&&parseFloat(e.originalPrice)>c,u=l?parseFloat(e.originalPrice).toFixed(2):null,d=s&&l?Math.round((1-parseFloat(c)/parseFloat(u))*100):null,f=(e.ratingValue||4.8).toFixed(1),p=e.ratingCount||null,m=t.isCarousel||!1,h=e.badge||`Top Pick`,g=e.affiliateUrl||`#`,_=e.id,v=e.category?.name||`Premium Collection`,y=Math.round(parseFloat(f)),b=[1,2,3,4,5].map(e=>`<span class="material-symbols-outlined" style="color:${e<=y?`#f59e0b`:`#e2ddd8`};font-variation-settings:'FILL' 1;font-size:13px;line-height:1">star</span>`).join(``),x;x=s?`
          <div class="product-card__price-row">
            <span class="product-card__price">${o}${c}</span>
            ${u?`<span class="product-card__old-price">${o}${u}</span>`:``}
            ${d?`<span class="product-card__save-tag">-${d}%</span>`:``}
          </div>`:`
          <div class="product-card__price-row no-price">
            <span class="product-card__contact-btn">
              <span class="material-symbols-outlined" style="font-size:13px">chat_bubble</span>
              Ask for price
            </span>
          </div>`;let S=d?`<div class="product-card__discount-badge">${d}%<br>OFF</div>`:``;return`
        <article class="product-card ${m?`carousel-item`:``}" data-id="${_}" data-enhanced-card>
          <div class="product-card__image-wrap">
            <div class="product-card__badge">${h}</div>
            ${S}
            <img
              src="${i}"
              alt="${n}"
              loading="lazy"
              onerror="this.src='/assets/products/premium_product_placeholder.png'">
          </div>

          <div class="product-card__body">
            <div class="product-card__category">${v}</div>
            <h3 class="product-card__name">${n}</h3>
            ${r?`<p class="product-card__benefit">${r}</p>`:``}
            <div class="product-card__rating">
              ${b}
              ${p?`<span class="product-card__rating-count">(${p.toLocaleString()})</span>`:`<span class="product-card__rating-count">${f}</span>`}
            </div>
            ${x}
          </div>

          <div class="product-card__actions">
            <a href="${g}"
               target="_blank"
               rel="noopener noreferrer"
               class="product-card__btn-amazon"
               data-id="${_}">
              <span class="material-symbols-outlined">shopping_cart</span>
              <span class="btn-text">Buy Now</span>
            </a>
            <button class="product-card__btn-quickview"
                    data-qv-btn
                    data-id="${_}">
              <span class="material-symbols-outlined">visibility</span>
              <span class="btn-text">Quick View</span>
            </button>
          </div>
        </article>
      `}catch(e){return console.error(`Error creating product card:`,e),``}}renderBoutiqueProducts(e,t,n){try{let t=e;if(t.length===0){n.innerHTML=`<p class="col-span-full text-center serif italic opacity-40 py-20">No products found in this collection.</p>`;return}let r=t[0].category?.name||`Exclusive Collection`,i=t[0].category?.theme||{};i.primary;let a=`
        <div class="relative w-full py-24 md:py-32 mb-16 overflow-hidden rounded-[3rem] bg-gray-900 text-white">
          <div class="absolute inset-0 opacity-40">
            <img src="${this.currentCategoryImage||`/assets/mrt-hero.png`}" class="w-full h-full object-cover blur-sm" onerror="this.src='/assets/mrt-hero.png'">
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          <div class="relative z-10 px-8 md:px-16 max-w-4xl">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
               <span class="material-symbols-outlined text-sm text-primary">diamond</span>
               <span class="text-[10px] font-bold uppercase tracking-[0.2em]">${r} Portfolio</span>
            </div>
            <h1 class="text-4xl md:text-6xl font-headline italic mb-6 leading-tight">${r}</h1>
            <p class="text-lg md:text-xl text-white/70 font-body leading-relaxed max-w-2xl mb-8">${i.seoIntro||`Meticulously sourced, boutique-grade essentials selected for the MRT International global standard.`}</p>
          </div>
        </div>
      `,o=[...new Set(t.map(e=>e.badge).filter(Boolean))];n.innerHTML=`
        ${a}
        <div class="mb-12">
          <!-- Filter Navigation: Sticky on Mobile to avoid overlaps -->
          <div class="sticky top-14 z-[80] bg-surface/95 backdrop-blur-md py-4 mb-8 -mx-4 px-4 border-b border-gray-50 flex flex-nowrap items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth">
            <button class="category-filter-pill active whitespace-nowrap px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.15em] border border-gray-100 shadow-sm transition-all duration-300 bg-gray-900 text-white" data-filter="all">
              Curated All <span class="ml-2 opacity-50 font-medium">${t.length}</span>
            </button>
            ${o.map(e=>`<button class="category-filter-pill whitespace-nowrap px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.15em] border border-gray-100 shadow-sm transition-all duration-300 bg-white text-gray-400 hover:text-gray-900 hover:border-gray-200" data-filter="${e}">
                ${e} <span class="ml-2 opacity-30 font-medium">${t.filter(t=>(t.badge||`Top Pick`)===e).length}</span>
              </button>`).join(``)}
          </div>
          
          <div id="category-grid" class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2 md:px-0">
            ${t.map((e,t)=>`
              <div class="category-card-wrapper h-full" data-badge="${e.badge||``}" style="animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${t*.05}s both;">
                ${this.createProductCard(e)}
              </div>
            `).join(``)}
          </div>
        </div>
      `,n.querySelectorAll(`.category-filter-pill`).forEach(e=>{e.addEventListener(`click`,()=>{n.querySelectorAll(`.category-filter-pill`).forEach(e=>{e.classList.remove(`bg-gray-900`,`text-white`,`active`),e.classList.add(`bg-white`,`text-gray-400`)}),e.classList.remove(`bg-white`,`text-gray-400`),e.classList.add(`bg-gray-900`,`text-white`,`active`);let t=e.dataset.filter;n.querySelectorAll(`.category-card-wrapper`).forEach((e,n)=>{let r=e.dataset.badge;t===`all`||r===t?(e.classList.remove(`hidden`),e.style.animation=`none`,e.offsetHeight,e.style.animation=`fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${n*.03}s both`):e.classList.add(`hidden`)})})}),this.initCardInteractions(`category-products-container`)}catch(e){console.error(`[MRT] Failed to render Boutique products:`,e)}}initCardInteractions(e=null){let t=e?`#${e} [data-enhanced-card]`:`[data-enhanced-card]`;document.querySelectorAll(t).forEach(e=>{e.addEventListener(`mousemove`,t=>{let n=e.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top;e.style.setProperty(`--mouse-x`,`${r/n.width*100}%`),e.style.setProperty(`--mouse-y`,`${i/n.height*100}%`);let a=n.width/2,o=n.height/2,s=(r-a)/(n.width/2),c=(i-o)/(n.height/2);typeof gsap<`u`&&gsap.to(e,{rotateY:s*8,rotateX:-c*8,boxShadow:`${-s*20}px ${-c*20}px 50px -10px rgba(0,0,0,0.1)`,duration:.4,ease:`power2.out`})}),e.addEventListener(`mouseleave`,()=>{e.style.setProperty(`--x`,`50%`),e.style.setProperty(`--y`,`50%`),typeof gsap<`u`&&gsap.to(e,{rotateY:0,rotateX:0,duration:.8,ease:`elastic.out(1, 0.7)`})})}),(e?[e]:[...n||[],`category-products-container`]).forEach(e=>{let t=document.getElementById(e);if(!t)return;let n=t.querySelectorAll(`.product-card-premium`);typeof gsap<`u`&&typeof ScrollTrigger<`u`&&n.length>0&&(gsap.set(n,{opacity:0,y:30}),gsap.to(n,{y:0,opacity:1,duration:.8,stagger:.05,ease:`power2.out`,scrollTrigger:{trigger:t,start:`top 95%`,toggleActions:`play none none none`}}))}),typeof ScrollTrigger<`u`&&ScrollTrigger.refresh()}initLenis(){if(!this.lenis||this.lenisDriverInitialized)return;if(this.lenisDriverInitialized=!0,typeof gsap<`u`){this.lenisTicker=e=>{this.lenis?.raf(e*1e3)},gsap.ticker.add(this.lenisTicker),gsap.ticker.lagSmoothing(0);return}let e=t=>{this.lenis&&(this.lenis.raf(t),this.lenisRafId=requestAnimationFrame(e))};this.lenisRafId=requestAnimationFrame(e)}scrollToTarget(e){if(e){if(this.lenis){this.lenis.scrollTo(e,{duration:1.1});return}e.scrollIntoView({behavior:`smooth`,block:`start`})}}getProductBenefits(e){if(Array.isArray(e.keyBenefits)&&e.keyBenefits.length>0)return e.keyBenefits;if(typeof e.keyBenefits==`string`&&e.keyBenefits.trim())try{let t=JSON.parse(e.keyBenefits);if(Array.isArray(t)&&t.length>0)return t}catch(t){console.warn(`[MRT] Failed to parse keyBenefits for Quick View:`,e.id,t)}return[`Superior Build`,`Premium Quality`,`Global Standards`]}initScrollReveal(){if(typeof gsap>`u`||typeof ScrollTrigger>`u`)return;gsap.registerPlugin(ScrollTrigger);let e=window.location.pathname;document.querySelectorAll(`nav a`).forEach(t=>{let n=t.getAttribute(`href`);e.includes(n)&&n!==`index.html`&&(t.classList.add(`text-on-surface`,`border-b-2`,`border-primary`),t.classList.remove(`text-on-surface-variant`))}),gsap.utils.toArray(`.category-pill`).forEach(e=>{gsap.from(e,{x:50,opacity:0,duration:1,stagger:.1,ease:`power3.out`})})}async renderDynamicHomepage(){try{console.log(`[MRT] Initializing Dynamic Homepage...`);let[e,t]=await Promise.all([fetch(`/api/categories?_t=${Date.now()}`),fetch(`/api/products?limit=100&_t=${Date.now()}`)]),n=await e.json(),r=await t.json(),i=Array.isArray(r)?r:r.products||[];if(n&&n.length>0){this.allCategories=n,this.allProducts=i;let e=document.getElementById(`avory-categories`);e&&n.length>0&&(e.innerHTML=n.slice(0,8).map(e=>`
            <a href="category.html?c=${e.slug}" class="flex flex-col items-center gap-2 min-w-[76px] md:min-w-[100px] snap-start group cursor-pointer text-decoration-none">
                <div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-gray-200 shadow-sm group-hover:border-primary transition-all duration-300 p-0.5 bg-white">
                    <img src="${e.image||`/assets/categories/${e.slug}.png`}" alt="${e.name}" loading="lazy" class="w-full h-full object-cover rounded-full bg-gray-50">
                </div>
                <span class="text-[10px] md:text-xs font-semibold text-center leading-tight text-gray-800 line-clamp-2">${e.name}</span>
            </a>
          `).join(``)),this.renderDynamicCarousels(n,i),this.updateSEO(`Home`,`Global Sourcing Platform`)}else console.warn(`[MRT] No categories found for Bento Grid.`)}catch(e){console.error(`Dynamic homepage sync failed:`,e)}finally{typeof ScrollTrigger<`u`&&ScrollTrigger.refresh()}}renderBentoGrid(e){try{if(!Array.isArray(e))return;let t=[`cat-slot-1`,`cat-slot-2`,`cat-slot-3`,`cat-slot-4`],n=[`home-kitchen`,`health-wellness`,`electronics-accessories`,`pet-supplies`],r=n.map(t=>e.find(e=>e.slug===t)).filter(Boolean);if(r.length<4){let t=e.filter(e=>!n.includes(e.slug));for(;r.length<4&&t.length>0;)r.push(t.shift())}console.log(`[MRT] Rendering Bento Grid with ${r.length} items.`),r.forEach((e,n)=>{let r=document.getElementById(t[n]);if(!r)return;let i=n===0,a=i?`from-black/90 via-black/40`:`from-black/80 via-black/20`,o=e.image||`/assets/categories/${e.slug}.png`;(e.slug===`pet-supplies`||e.name.toLowerCase().includes(`pet`))&&(o=`/assets/categories/pet-supplies.png`),r.innerHTML=`
            <a href="category.html?c=${e.slug}" class="w-full h-full block relative group">
                <img src="${o}" alt="${e.name}" class="w-full h-full object-cover transition-transform duration-[1.5s] ${i?`group-hover:scale-105`:`group-hover:scale-110`}" onerror="this.src='/assets/products/premium_product_placeholder.png'">
                <div class="absolute inset-0 bg-gradient-to-t ${a} to-transparent flex flex-col ${i?`p-16`:`p-10`} justify-end">
                    <h3 class="${i?`text-5xl mb-6`:`text-3xl mb-3`} text-white font-headline italic">${e.name}</h3>
                    <p class="text-white/70 ${i?`text-xl mb-10 max-w-xl`:`text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}">${e.description||`Curated excellence for elite standards.`}</p>
                    <span class="inline-flex items-center text-primary-container font-bold uppercase tracking-widest text-[10px]">Explore Items <span class="material-symbols-outlined ml-2 text-sm">arrow_forward</span></span>
                </div>
            </a>
          `})}catch(e){console.error(`[MRT] Bento Grid Render Error:`,e)}}renderCategoriesGrid(e){try{let t=document.getElementById(`categories-grid`),n=document.getElementById(`avory-categories`);t&&(t.innerHTML=e.map((t,n)=>{let r=n===6||n>0&&n===e.length-1&&e.length>5,i=r?`from-black/90 via-black/40`:`from-black/80 via-black/20`,a=t.slug===`pet-supplies`||t.name.toLowerCase().includes(`pet`)?`/assets/categories/pet-supplies.png`:t.image||`/assets/categories/${t.slug}.png`;return`
              <a href="category.html?c=${t.slug}" class="group relative ${r?`col-span-1 md:col-span-2 lg:col-span-3 h-[400px]`:`h-[500px]`} rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-outline-variant/10 block">
                  <img src="${a}" alt="${t.name}" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-[1.5s] ${r?`group-hover:scale-105`:`group-hover:scale-110`}">
                  <div class="absolute inset-0 bg-gradient-to-${r?`r`:`t`} ${i} to-transparent flex flex-col ${r?`justify-center p-20`:`justify-end p-12`}">
                      <h3 class="${r?`text-5xl mb-6`:`text-4xl mb-4`} text-white font-headline italic">${t.name}</h3>
                      <p class="${r?`text-white/70 text-xl mb-10 max-w-xl`:`text-white/70 text-lg mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}">${t.description||`Explore our premium selection.`}</p>
                      ${r?`<div><span class="inline-flex items-center bg-primary text-on-primary px-10 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all">Explore Peak Gear <span class="material-symbols-outlined ml-3">arrow_forward</span></span></div>`:`<span class="inline-flex items-center text-primary-container font-bold uppercase tracking-widest text-xs">Explore Items <span class="material-symbols-outlined ml-2">arrow_forward</span></span>`}
                  </div>
              </a>
            `}).join(``)),n&&(n.innerHTML=e.map(e=>{let t=e.slug===`pet-supplies`||e.name.toLowerCase().includes(`pet`)?`/assets/categories/pet-supplies.png`:e.image||`/assets/categories/${e.slug}.png`;return`
            <a href="category.html?c=${e.slug}" class="flex flex-col items-center gap-3 flex-shrink-0 snap-start group">
              <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300 shadow-sm">
                <img src="${t}" alt="${e.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              </div>
              <span class="text-[11px] font-bold uppercase tracking-widest text-gray-900 group-hover:text-primary transition-colors text-center max-w-[80px] leading-tight">${e.name}</span>
            </a>
          `}).join(``))}catch(e){console.error(`[MRT] Categories Render Error:`,e)}}renderDynamicCarousels(e,t){try{let n=document.getElementById(`category-carousels-container`);if(!n)return;n.innerHTML=e.map((e,n)=>{let r=t.filter(t=>t.categoryId===e.id||t.category?.slug===e.slug).slice(0,8);if(r.length===0)return``;let i=n%2==1?`bg-[#fcf8f5]`:`bg-white`,a=e.theme?.primary||`#914d00`,o=e.theme?.secondary||`#ff8c00`,s=parseInt(a.slice(1,3),16)||145,c=parseInt(a.slice(3,5),16)||77,l=parseInt(a.slice(5,7),16)||0,u=r.map(e=>this.createProductCard(e,{isCarousel:!0})).join(``);return`
            <section class="py-10 md:py-12 ${i} overflow-hidden carousel-section border-b border-outline-variant/10" style="--category-primary:${a};--category-secondary:${o};--category-primary-glow:rgba(${s},${c},${l},0.15)">
                <div class="px-4 md:px-8 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 md:mb-16 reveal-up">
                    <div class="flex flex-col">
                        <span class="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4 opacity-60">Boutique Department</span>
                        <h2 class="text-5xl md:text-7xl font-headline italic tracking-tighter">${e.name.split(` `).map((e,t,n)=>t===n.length-1?`<i>${e}</i>`:e).join(` `)}</h2>
                    </div>
                    <div class="section-nav flex items-center space-x-8">
                        <button class="nav-prev hover:text-primary transition-all duration-300 transform hover:-translate-x-2" data-target="${e.slug}-carousel"><span class="material-symbols-outlined text-[48px] opacity-40 hover:opacity-100">keyboard_backspace</span></button>
                        <button class="nav-next hover:text-primary transition-all duration-300 transform hover:translate-x-2" data-target="${e.slug}-carousel"><span class="material-symbols-outlined text-[48px] opacity-40 hover:opacity-100">trending_flat</span></button>
                    </div>
                </div>
                <div id="${e.slug}-carousel" class="px-8 pb-12 peek-container flex overflow-x-auto snap-x snap-mandatory gap-8 no-scrollbar scroll-smooth">
                    ${u}
                </div>
            </section>
          `}).join(``),this.initCardInteractions(),this.bindEvents()}catch(e){console.error(`[MRT] Dynamic Carousels Render Error:`,e)}}async renderHomepageTestimonials(){try{let e=await fetch(`/api/testimonials`);if(e.ok){let t=await e.json();this.renderTestimonials(t)}}catch(e){console.error(`Testimonial sync failed:`,e)}finally{typeof ScrollTrigger<`u`&&ScrollTrigger.refresh()}}renderTestimonials(e){let t=(t,n)=>{let r=document.getElementById(t);r&&(r.innerHTML=e.filter(e=>e.region===n).map((e,t)=>`
        <div class="p-5 md:p-7 lg:p-10 bg-white/85 md:bg-white/70 lg:bg-white/40 backdrop-blur-xl rounded-[1.75rem] md:rounded-[2rem] lg:rounded-[2.5rem] border border-primary/10 md:border-white/70 lg:border-white/60 hover:shadow-2xl transition-all duration-700 group reveal-up relative overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:shadow-[0_24px_60px_rgba(15,23,42,0.08)] lg:shadow-none" 
             style="transition-delay: ${t*150}ms">
          <div class="absolute inset-x-0 top-0 h-24 md:h-28 lg:hidden bg-gradient-to-br from-primary/12 via-primary/5 to-transparent"></div>
          <div class="absolute top-0 right-0 p-4 md:p-5 lg:p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span class="material-symbols-outlined text-5xl md:text-6xl text-primary">format_quote</span>
          </div>
          <div class="relative z-10 flex lg:hidden items-center justify-between gap-3 mb-4 md:mb-5">
            <span class="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[9px] md:text-[10px] font-black uppercase tracking-[0.28em] text-primary lg:hidden">Verified Voice</span>
            <div class="flex space-x-1">
              ${[,,,,,].fill(`<span class="material-symbols-outlined text-sm text-primary fill-primary">star</span>`).join(``)}
            </div>
          </div>
          <div class="hidden lg:flex mb-6 space-x-1">
            ${[,,,,,].fill(`<span class="material-symbols-outlined text-sm text-primary fill-primary">star</span>`).join(``)}
          </div>
          <p class="text-lg md:text-[1.35rem] lg:text-2xl font-headline italic mb-6 md:mb-8 lg:mb-10 leading-relaxed text-on-surface opacity-90 group-hover:opacity-100 transition-opacity relative z-10">"${e.text}"</p>
          <div class="flex items-center gap-3 md:gap-4 relative z-10">
            <div class="w-11 h-11 md:w-12 md:h-12 rounded-2xl md:rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-base md:text-lg ring-1 ring-primary/10">
              ${e.name.charAt(0)}
            </div>
            <div class="flex flex-col min-w-0">
              <span class="text-xs md:text-sm font-bold uppercase tracking-[0.18em] md:tracking-[0.2em] text-primary">${e.name}</span>
              <span class="text-[10px] uppercase tracking-[0.22em] md:tracking-widest text-on-surface-variant opacity-60 font-bold">${e.location}</span>
            </div>
          </div>
        </div>
      `).join(``))};t(`testimonials-us`,`us`),t(`testimonials-ae`,`ae`)}initHeaderScroll(){let e=document.querySelector(`header`);e&&window.addEventListener(`scroll`,()=>{e.classList.toggle(`bg-white/80`,window.scrollY>20),e.classList.toggle(`backdrop-blur-xl`,window.scrollY>20),e.classList.toggle(`shadow-xl`,window.scrollY>20)})}animateReveals(){typeof gsap>`u`||typeof ScrollTrigger>`u`||(gsap.registerPlugin(ScrollTrigger),gsap.utils.toArray(`.reveal-up`).forEach(e=>{gsap.from(e,{scrollTrigger:{trigger:e,start:`top 96%`,toggleActions:`play none none none`,onEnter:()=>e.classList.add(`active`)},y:30,opacity:0,duration:1.2,ease:`expo.out`,clearProps:`all`})}),setTimeout(()=>{ScrollTrigger.refresh()},1e3))}bindEvents(){document.querySelectorAll(`.nav-prev, .nav-next`).forEach(e=>{e.dataset.bound!==`true`&&(e.dataset.bound=`true`,e.addEventListener(`click`,t=>{t.stopPropagation();let n=document.getElementById(e.dataset.target);n&&n.scrollBy({left:e.classList.contains(`nav-prev`)?-400:400,behavior:`smooth`})}))}),this.globalEventsBound||=(document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-qv-btn]`);if(t){e.stopPropagation(),this.openQuickView(t.dataset.id);return}let n=e.target.closest(`[data-review-btn]`);if(n){this.openReviewModal(n.dataset.productId,n.dataset.productName);return}if(e.target.closest(`a, button, input, textarea, select, label`))return;let r=e.target.closest(`[data-enhanced-card]`);r&&this.openQuickView(r.dataset.id)}),!0),document.querySelectorAll(`a[href^="#"]`).forEach(e=>{e.dataset.bound!==`true`&&(e.dataset.bound=`true`,e.addEventListener(`click`,t=>{let n=e.getAttribute(`href`);if(!n||n===`#`)return;t.preventDefault();let r=document.querySelector(n);this.scrollToTarget(r)}))});let e=document.getElementById(`mobile-menu-btn`),t=document.getElementById(`close-drawer-btn`),n=document.getElementById(`mobile-drawer`),r=document.getElementById(`mobile-drawer-overlay`);if(e&&n&&r){let i=()=>{n.classList.remove(`-translate-x-full`),r.classList.remove(`hidden`),setTimeout(()=>r.classList.remove(`opacity-0`),10),document.body.style.overflow=`hidden`},a=()=>{n.classList.add(`-translate-x-full`),r.classList.add(`opacity-0`),setTimeout(()=>r.classList.add(`hidden`),300),document.body.style.overflow=``};e.dataset.bound!==`true`&&(e.dataset.bound=`true`,e.addEventListener(`click`,e=>{e.preventDefault(),i()})),t&&t.dataset.bound!==`true`&&(t.dataset.bound=`true`,t.addEventListener(`click`,e=>{e.preventDefault(),a()})),r.dataset.bound!==`true`&&(r.dataset.bound=`true`,r.addEventListener(`click`,a)),n.querySelectorAll(`a`).forEach(e=>{e.dataset.drawerBound!==`true`&&(e.dataset.drawerBound=`true`,e.addEventListener(`click`,a))})}let i=document.getElementById(`contact-form`);if(i&&i.dataset.bound!==`true`){i.dataset.bound=`true`;let e=async e=>{e&&e.preventDefault();let t=document.getElementById(`contact-submit-btn`)||i.querySelector(`button[type="submit"]`);if(t?.disabled)return;let n=t?.innerText||`Send Message`;t&&(t.innerText=`SENDING...`,t.disabled=!0,t.style.opacity=`0.7`);let r=new FormData(i),a=Object.fromEntries(r.entries());try{let e=await(await fetch(`/api/contact`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(a)})).json();e.success?(toast(`Message received! We will contact you soon.`,`success`),i.reset()):toast(e.error||`Submission failed.`,`error`)}catch(e){console.error(`Submission Error:`,e),toast(`Network error. Check your connection.`,`error`)}finally{t&&(t.innerText=n,t.disabled=!1,t.style.opacity=`1`)}};i.addEventListener(`submit`,e);let t=document.getElementById(`contact-submit-btn`);t&&t.addEventListener(`click`,t=>{i.checkValidity()?e(t):i.reportValidity()})}let a=document.getElementById(`review-form`);a&&a.dataset.bound!==`true`&&(a.dataset.bound=`true`,a.addEventListener(`submit`,async e=>{e.preventDefault();let t=a.querySelector(`button[type="submit"]`),n=t.innerText;t.innerText=`Submitting...`,t.disabled=!0;let r=new FormData(a),i={productId:r.get(`productId`),userName:r.get(`name`),rating:parseInt(r.get(`rating`)),comment:r.get(`text`),location:r.get(`location`)||`Global`};try{if((await fetch(`/api/reviews`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(i)})).ok)alert(`Thank you! Review submitted for approval.`),a.closest(`.fixed`).remove();else throw Error(`Failed`)}catch{alert(`Error submitting review.`),t.innerText=n,t.disabled=!1}})),window.closeQuickView=()=>this.closeQuickView()}async openQuickView(e){let t=this.allProducts.find(t=>String(t.id)===String(e));if(!t){console.warn(`[MRT] openQuickView: product not found:`,e);return}let n=document.getElementById(`mrt-qv-modal`);n||(n=document.createElement(`div`),n.id=`mrt-qv-modal`,document.body.appendChild(n));let r=t.price?parseFloat(t.price).toFixed(2):`39.99`,i=(parseFloat(r)*1.42).toFixed(2),a=(t.ratingValue||4.8).toFixed(1),o=this.getProductBenefits(t),s=e=>`animation-delay:${e*80}ms`,c=n.classList.contains(`is-open`);n.classList.remove(`is-open`),this.quickViewCleanupPending=!1,n.innerHTML=`
      <div class="mrt-qv-backdrop" id="mrt-qv-backdrop"></div>
      <div class="mrt-qv-panel">

        <button class="mrt-qv-close" id="mrt-qv-close-btn">
          <span class="mso" style="font-size:20px">close</span>
        </button>

        <!-- Left: image -->
        <div class="mrt-qv-img-col">
          <img src="${t.image||`/assets/products/premium_product_placeholder.png`}"
               alt="${t.name}"
               onerror="this.src='/assets/products/premium_product_placeholder.png'">
        </div>

        <!-- Right: content -->
        <div class="mrt-qv-content-col">

          <!-- Badge + rating -->
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap">
            <span style="padding:4px 14px;border-radius:999px;background:rgba(145,77,0,.1);color:var(--primary,#914d00);font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.08em">${t.badge||`Premium`}</span>
            <div style="display:flex;align-items:center;gap:4px;font-size:13px;font-weight:700;color:#111">
              <span class="mso" style="font-size:16px;color:#f59e0b;font-variation-settings:'FILL' 1">star</span>
              ${a} <span style="color:#9ca3af;font-weight:400;font-size:12px;margin-left:2px">(${t.ratingCount||`500+`})</span>
            </div>
          </div>

          <h2 style="font-size:clamp(1.4rem,3vw,2rem);font-weight:900;color:#0f172a;line-height:1.2;margin-bottom:8px">${t.name}</h2>
          <p style="font-size:14px;color:#64748b;line-height:1.7;margin-bottom:20px">${t.description||t.shortBenefit||`Experience the finest MRT International selection.`}</p>

          <!-- Benefits -->
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:22px">
            ${o.map((e,t)=>`
              <div class="mrt-benefit-item" style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:12px;background:#f8fafc;border:1px solid #f1f5f9;${s(t)}">
                <span class="mso" style="font-size:18px;color:var(--primary,#914d00);font-variation-settings:'FILL' 1">check_circle</span>
                <span style="font-size:12px;font-weight:700;color:#334155;text-transform:uppercase;letter-spacing:.06em">${e}</span>
              </div>`).join(``)}
          </div>

          <!-- Price + CTA -->
          <div style="margin-top:auto;padding-top:16px;border-top:1px solid #f1f5f9">
            <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:14px">
              <span style="font-size:32px;font-weight:900;color:#0f172a">$${r}</span>
              <span style="font-size:14px;color:#d1d5db;text-decoration:line-through">$${i}</span>
              <span style="font-size:10px;font-weight:900;color:#16a34a;background:#f0fdf4;padding:2px 10px;border-radius:999px;margin-left:auto">Save 29%</span>
            </div>
            <a href="${t.affiliateUrl||`#`}" target="_blank" rel="noopener noreferrer"
               style="display:flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:15px 0;border-radius:14px;background:linear-gradient(90deg,#f59e0b,#f97316);color:#fff;font-size:11px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;box-shadow:0 6px 24px rgba(249,115,22,.4);transition:transform .2s,box-shadow .2s"
               onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 10px 32px rgba(249,115,22,.5)'"
               onmouseout="this.style.transform='';this.style.boxShadow='0 6px 24px rgba(249,115,22,.4)'">
              <span class="mso" style="font-size:20px">shopping_cart</span>
              Buy Now — Best Price
            </a>
          </div>
        </div>
      </div>
    `,document.getElementById(`mrt-qv-backdrop`).addEventListener(`click`,()=>this.closeQuickView()),document.getElementById(`mrt-qv-close-btn`).addEventListener(`click`,()=>this.closeQuickView()),n.dataset.escapeBound||(document.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.closeQuickView()}),n.dataset.escapeBound=`true`),requestAnimationFrame(()=>{requestAnimationFrame(()=>{n.classList.add(`is-open`)})}),c||(this.previousBodyOverflow=document.body.style.overflow),document.body.style.overflow=`hidden`}closeQuickView(){let e=document.getElementById(`mrt-qv-modal`);e&&(e.classList.remove(`is-open`),document.body.style.overflow=``,document.body.classList.remove(`modal-open`),e.addEventListener(`transitionend`,()=>{e.classList.contains(`is-open`)||(e.innerHTML=``)},{once:!0}),setTimeout(()=>{e.classList.contains(`is-open`)||(e.innerHTML=``)},500))}openReviewModal(e,t){let n=document.createElement(`div`);n.className=`fixed inset-0 z-[110] flex items-center justify-center p-4`,n.innerHTML=`
      <div class="absolute inset-0 bg-black/60 backdrop-blur-md" onclick="this.parentElement.remove()"></div>
      <div class="relative w-full max-w-xl bg-white rounded-3xl p-10 shadow-2xl">
        <h3 class="text-2xl font-bold mb-2">Review ${t}</h3>
        <p class="text-gray-500 mb-8">Share your experience with the global community.</p>
        <form class="space-y-6" id="review-form">
          <input type="hidden" name="productId" value="${e}">
          <div>
            <label class="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Rating</label>
            <div class="flex gap-2">
              ${[1,2,3,4,5].map(e=>`
                <input type="radio" name="rating" value="${e}" id="r${e}" class="hidden peer" required>
                <label for="r${e}" class="cursor-pointer text-gray-300 peer-checked:text-primary hover:text-primary transition-colors">
                  <span class="material-symbols-outlined text-3xl">star</span>
                </label>
              `).join(``)}
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
            <textarea name="text" class="w-full bg-gray-50 border border-gray-100 rounded-2xl p-5 focus:ring-2 ring-primary outline-none transition-all" rows="4" placeholder="Your thoughts..." required></textarea>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Name" class="bg-gray-50 border border-gray-100 rounded-2xl p-5" required>
            <input type="text" name="location" placeholder="Location (e.g. Dubai, UAE)" class="bg-gray-50 border border-gray-100 rounded-2xl p-5" required>
          </div>
          <button type="submit" class="w-full py-5 bg-primary text-white rounded-2xl font-bold tracking-widest uppercase hover:opacity-90 transition-all">Submit Global Review</button>
        </form>
      </div>
    `,document.body.appendChild(n),this.bindEvents()}async submitReview(e,t){let n=t.querySelector(`button[type="submit"]`),r=n.innerText;n.innerText=`Submitting...`,n.disabled=!0;try{let n=new FormData(t),r={productId:e,userName:n.get(`userName`),location:n.get(`location`),rating:parseInt(n.get(`rating`)),comment:n.get(`comment`)};if((await fetch(`/api/reviews`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(r)})).ok)t.closest(`.fixed`).remove(),alert(`Thank you! Your review has been submitted for approval.`);else throw Error(`Failed to submit`)}catch(e){console.error(e),alert(`Error submitting review. Please try again.`),n.innerText=r,n.disabled=!1}}};document.addEventListener(`DOMContentLoaded`,()=>{new r});