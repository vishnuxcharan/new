var web3;

async function Connect(){
    await window.etherem.request.enable();
    web3=new web3(window.web3.currentprovider);
    
}