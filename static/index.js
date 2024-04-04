services = {
    "service":[
        {
            "title":"Graphic Design",
            "image":"businesscard3.jpg",
            "alt":"Business Card",
            "link":"./templates/graphic_design.html"
        },
        {
            "title":"Content Creation",
            "image":"dpicture2.jpg",
            "alt":"logo mockup",
            "link":"./templates/content_creation.html"
        },
        {
            "title":"Web Design",
            "image":"logomanipulation1.jpg",
            "alt":"website",
            "link":"./templates/web_design.html"
        }
    ],
    "graphic_design":[
        {
            "id":"g1",
            "title":"Flyers",
            "image":"flyer1.png",
            "description":"Digital and hard-copy flyers",
            "printing":" and printing of A4, A5 and A6 flyers",
            "price":"",
            "alt":"digital flyer"  
        },
        {
            "id":"g2",
            "title":"Brochures",
            "image":"brochure.jpg",
            "description":"A4 tripple-fold colorful brochures",
            "printing":" and printing",
            "price":"",
            "alt":"brochure"  
        },
        {
            "id":"g3",
            "title":"Billboards",
            "image":"billboard.png",
            "description":"Large and small billboard design",
            "printing":" and printing.",
            "price":"",
            "alt":"billboard"  
        },
        {
            "id":"g4",
            "title":"Banners",
            "image":"banner.png",
            "description":"All banner sizes designs",
            "printing":" and printing.",
            "price":"",
            "alt":"digital flier"  
        },
        {
            "id":"g5",
            "title":"Business Cards",
            "image":"businesscard4.jpg",
            "description":"One-sided and double-sided business card design",
            "printing":" and printing.",
            "price":"",
            "alt":"Business Card"  
        },
        {
            "id":"g6",
            "title":"Calenders",
            "image":"calendar.jpg",
            "description":"Personal, business and church calendar designs",
            "printing":" and A2, A3, A4 printing.",
            "price":"",
            "alt":"calendar"  
        },
        {
            "id":"g7",
            "title":"Logos",
            "image":"logo.jpg",
            "description":"All kinds of logo designs",
            "printing":"",
            "price":"",
            "alt":"logo"  
        },
        {
            "id":"g8",
            "title":"Labels",
            "image":"label.png",
            "description":"Personal and sticky product lable design",
            "printing":" and printing + cutting.",
            "price":"",
            "alt":"product label"  
        },
        {
            "id":"g9",
            "title":"Wedding Cards",
            "image":"weddingcard.jpg",
            "description":"Apealing wedding card designs",
            "printing":" and printing.",
            "price":"",
            "alt":"wedding card"  
        }
    ],
    "content_creation":[
        {
            "id":"c1",
            "title":"Logo Mockup",
            "image":"logomanipulation1.jpg",
            "description":"Logo mockup images to put on your socials",
            "printing":"",
            "price":"",
            "alt":"logo mockup"  
        },
        {
            "id":"c2",
            "title":"Motion Graphics",
            "image":"dpicture.jpg",
            "description":" High quality motion graphic videos to showcase you brand",
            "printing":"",
            "price":"",
            "alt":"motion graphics image"  
        },
        {
            "id":"c3",
            "title":"Digital Flyer",
            "image":"flyer2.jpg",
            "description":"Post like a professional with out digital flyers",
            "printing":"",
            "price":"",
            "alt":"digital flyer"
        },
        {
            "id":"c4",
            "title":"Catalogue Images",
            "image":"dpicture.jpg",
            "description":"Make your social media catalogues look more professional with our designs",
            "printing":"",
            "price":"",
            "alt":"logo mockup"
        }
    ],
    "web_design":[
        {
            "id":"w1",
            "title":"Weblite",
            "pages":10,
            "price":125,
            "description":[
                "No regular updates",
                "Updates will be made for you when necessary",
                "For displaying things that don’t require regular updates, e.g Catalogues",
                "Includes links to your WhatsApp, E-Mail, Facebook, Instagram or any other social media accounts",
                "Contacts page is bonus"
            ]
        },
        {
            "id":"w2",
            "title":"Basic",
            "pages":10,
            "price":200,
            "description":[
                "Regular updates",
                "No back-end but still allows you to make regular updates",
                "For displaying things that require, regular updates, e.g a blog"                
            ]
        },
        {
            "id":"w3",
            "title":"Semi-Dynamic",
            "pages":20,
            "price":400,
            "description":[
                "Rate of information updates depends on you",
                "Information updated through database",
                "More interactive site which can be used for E-Commerce as well. Allows people to send comments and their contact details",
                "Automatic mail to clients"
            ]
        },
        {
            "id":"w4",
            "title":"E-Commerce",
            "pages":30,
            "price":800,
            "description":[
                "Rate of update depends on you",
                "Has a user-friendly interface for you to make updates and communicate with clients.",
                "No database knowledge required",
                "Has a cart and allows online payment.",
                "More suited for e-commerce. Makes calculations and provides stock related notifications to you and clients",
                "Provides basic monthly financial reports",
                "Automatic mail to clients"
                ]
        },
        {
            "id":"w5",
            "title":"Custom",
            "pages":"Custom",
            "price":"Lets Talk",
            "description":[
                "This is for businesses that have a more specific way of doing their business.",
                "You get to be in total control of how the site works and looks",
                "Your prefered dormain name"
            ]
        }
    ]
}
var punchlines = ["noticed","adored", "professional","elevated","exotic","amaaazing!!!", "exquisite", "world-class"];
var ID = 1;

try
{
setInterval(()=>{
    old = document.getElementById(`${ID-1}`);
    old.style.display = "none";
    old.remove();
    var item = document.createElement("i");
    var container = document.getElementById("punch");
    container.appendChild(item);
    item.innerHTML = `${punchlines[Math.floor(Math.random()*punchlines.length)]}`;
    item.id = ID++;
    item.className = "punch-i";
    item.style.left = "-100%";
    setTimeout(()=>{item.style.left = "0%"},1);
},3000);
}catch{
    console.log("chimhingaidzo");
}
//all_services rendering on landing page
try
{
 let container = document.getElementById('all_services');
    for(item of services.service){
        container.innerHTML = container.innerHTML + `
            <div class="service-item">
                <a href ="${item.link}" class="image"><img src="./static/images/${item.image}" alt="${item.alt}"></a>
                <ul>
                    <li>${item.title}</li>
                    <li><a href="./templates/contacts.html">Contact Us</a></li>
                </ul>
            </div>
        `;
    }
} catch{
    console.log("dambudzo");
}

// rendering dad jokes
try{
    let dad_container = document.getElementById('dad');
    let joke_container = document.getElementById('joke');
    dad_container.innerHTML = `${data[0].dad}`;
    joke_container.innerHTML = `${data[0].joke}`
    setInterval(()=>{
        joke_container.style.color = "transparent";
        var i = Math.floor(Math.random()*data.length);
        dad_container.innerHTML = `${data[i].dad}`;
        joke_container.innerHTML = `${data[i].joke}`;
        setTimeout(()=>{joke_container.style.color = "black";},5000);
    },10000);
}
catch{
    console.log("problem");
}

//rendering graphic design stuff
try{
    let gd_container = document.getElementById('graphic_design');
    for(item of services.graphic_design){
        gd_container.innerHTML = gd_container.innerHTML + `
            <div class="service-item" id="${item.id}">
                <a href ="#" class="image"><img src="./../static/images/${item.image}" alt="${item.alt}"></a>
                <ul>
                    <li>${item.title}</li>
                    <li><a href="./contacts.html">Contact Us</a></li>
                </ul>
                <p>${item.description+item.printing}</p>
            </div>
        `;
    }
}catch{
    console.log("pane problem");
}

//content creation
try
{
    let cc_container = document.getElementById('content_creation');
    for(item of services.content_creation){
        cc_container.innerHTML = cc_container.innerHTML + `
            <div class="service-item" id="${item.id}">
            <a href ="#" class="image"><img src="./../static/images/${item.image}" alt="${item.alt}"></a>
                <ul>
                    <li>${item.title}</li>
                    <li><a href="./contacts.html">Contact Us</a></li>
                </ul>
                <p>${item.description+item.printing}</p>
            </div>
        `;
    }
}catch{
    console.log("pakashata");
}

//rendering web_design stuff
try{
    let wd_container = document.getElementById('web_design');
    for(item of services.web_design){
        wd_container.innerHTML = wd_container.innerHTML + `
            <div class="service-item" id="${item.id}">
                <h1 class="web-title web-title-${item.id}">${item.title}</h1>
                <h4 class="web-pages">${item.pages} pages</h4>
                <h1 class="web-price">$${item.price}</h1>
                <a href="./contacts.html" class="web-contact web-contact-${item.id}">Contact Us</a>
                <ul class="web-ul" id="web-ul-${item.id}">
                    <li class="web-li">SSL Certificate</li>
                </ul>
            </div>
        `;
        let web_ul = document.getElementById(`web-ul-${item.id}`);
        for(info of item.description){
            web_ul.innerHTML = web_ul.innerHTML + `
            <li class="web-li">${info}</li>
            `;
        }
    }
}catch{
    console.log("ma1 kani");
}
