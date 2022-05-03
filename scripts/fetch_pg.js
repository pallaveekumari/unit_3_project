

let appendData = (data,container) =>{

    data.forEach(({name, img_url, price}) => {
        
        let box = document.createElement("div")
        box.setAttribute("id","box")

        let img = document.createElement("img")
        img.src = img_url;
        img.setAttribute("id","img_pg");

        let time = document.createElement("p")
        time.setAttribute("id","time");
        time.innerText = "DELIVERY IN 90 MINUTES";

        let title = document.createElement("p")
        title.innerText = name;
        title.setAttribute("id","title")

        let quantity = document.createElement("p")
        quantity.innerText = "500 g"
        quantity.setAttribute("id","quantity")


        let price_div = document.createElement("div")
        price_div.setAttribute("id","price_div")

        let prices = document.createElement("p")
        prices.innerText = "MRP ₹" + price;
        prices.setAttribute("id","p_pg")

        let btn = document.createElement("button")
        btn.setAttribute("id","btn");
        btn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'+ " " + "ADD"

        price_div.append(prices,btn)
        box.append(img,time,title,quantity,price_div)
        container.append(box)
 


        
    });
}

let appendData2 = (data,container) =>{

    data.forEach(({name, img_url, price}) => {
        
        let box = document.createElement("div")
        box.setAttribute("id","box")

        let img = document.createElement("img")
        img.src = img_url;
        img.setAttribute("id","img_pg");

        let time = document.createElement("p")
        time.setAttribute("id","time");
        time.innerText = "DELIVERY IN 90 MINUTES";

        let title = document.createElement("p")
        title.innerText = name;
        title.setAttribute("id","title")

        let quantity = document.createElement("h4")
        quantity.innerText = "1 Pc";
        quantity.setAttribute("id","quantity")


        let price_div = document.createElement("div")
        price_div.setAttribute("id","price_div")

        let prices = document.createElement("p")
        prices.innerText = "MRP ₹" + price;
        prices.setAttribute("id","p_pg")

        let btn = document.createElement("button")
        btn.setAttribute("id","btn");
        btn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'+ " " + "ADD"

        price_div.append(prices,btn)
        box.append(img,time,title,quantity,price_div)
        container.append(box)
 


        
    });
}

export {appendData,appendData2}