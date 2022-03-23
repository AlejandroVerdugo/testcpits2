const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.ssa.ingenieria.unam.mx/horarios.html');
    await page.screenshot({ path: 'example.png' });
    
    await page.type('#clave', '1321');
    await page.screenshot({ path: 'example2.png' });
    await page.click('.btn');
    await page.screenshot({ path: 'example3.png', fullPage: true, });
    //await page.waitForTimeout(1000);
    
    /*
    const arregloNoOrdenado = await page.waitForXPath('//td/text()');
    const arreglo = await page.evaluate((arrei)=> arrei.map(x=>x.wholeText), arregloNoOrdenado);
    console.log(arreglo);*/




    const nodo = await page.evaluate(()=>{
        const nombress = document.querySelector('.table-responsive > .table > tbody:nth-child(2) > tr > td:nth-child(3)').textContent
        return nombress
    });
    console.log(nodo);
    //pruebas
    /*
    const pruebas = await page.evaluate(()=>{
        const data = document.querySelector('.table-responsive > .table > tbody:nth-child(2) > tr > td:nth-child(3)').textContent
        return data
    });
    console.log(pruebas);*/



    
    /*
    const content = await page.waitForXPath('//td[@style="text-align: left;"]/text()')
    console.log(content);
    */
    

  await browser.close();
})();