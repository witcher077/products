const element = document.getElementById("product");
const fetchData = async () => {
    try {
        const data = await fetch('https://dummyjson.com/products');
        const jsonData = await data.json();
        const products = jsonData?.products;
        console.log(products);
        products.map(e => {
            let li = document.createElement('li');
           li.className = "listItem";
        // li.style.backgroundImage=`url(${e.thumbnail})`;
        //    li.innerHTML = `<h3>${e.title}</h3>`
           li.innerHTML = `<h3>${e.title}</h3><div id="itemImage" style="background:url(${e.thumbnail});"><div class="bottom"></div></div><p >${e.description}</p>`;
        // document.getElementById("itemImage").style.backgroundImage=`url(${e.thumbnail})`;
        element.appendChild(li);
        });
    }
    catch {
        console.log("got Error");
    }
}
fetchData();


