const selectSeguro = document.getElementById("seguro");
const infoSeguro = document.getElementById("info-seguro");
const infoSeguradora = document.getElementById("info-seguradora");
const selectSeguradora = document.getElementById("seguradoras");

const seguroSeguradoraOptions = {
    "SulAmerica": {
        seguros: ["Vida", "Odonto", "Saude", "Viagem", "Previdencia", "Capitalizacao", "Investimentos"],
        link:"https://corretor.sulamericaseguros.com.br/"
    },
    "SOMPO":{
        seguros:["Residencial", "Auto", "Viagem", "Vida", "Empresarial", "AcidentesPessoais"],
        link:"https://corretor.sompoconsumer.com.br/PortalCorretor_Th/Login.aspx"
    },
    "MetLife":{
        seguros:["Vida", "Auto", "Saude", "Odonto"],
        link:"https://login.metlife.com.br/login/dynamic/Login.action"
    },
    "JuntoSeguros":{
        seguros:["Auto", "Residencial", "Vida", "Viagem"],
        link:"https://plataforma.juntoseguros.com/"
    },
    "Suhai":{
        seguros:["Moto", "Caminhao", "Auto"],
        link:"https://suhaiseguradoracotacao.com.br/login"
    },
    "HDI":{
        seguros:["Auto", "Residencial", "Vida", "Empresarial", "Frota", "Moto"],
        link:"https://www.hdi.com.br/hdidigital/"
    },
    "AIG":{
        seguros:["Residencial", "Viagem", "AcidentesPessoais"],
        link:"https://auth1.customerpltfm.aig.com/oauth2/aus187xvth5kQKY1t5d7/v1/authorize?client_id=0oa1ynjzfaF0SlrZp5d7&code_challenge=pL_hNxNcx17Jd4dXyHQP4T2q7GH91s3x4am7WMTJfpY&code_challenge_method=S256&nonce=qj04f29cqELjSbUY5jvJ7lXzJ9OwP6Mnt5QO3qHaRPSYHxrqHiAdrRT7I4dzgj1W&redirect_uri=https%3A%2F%2Fwww-450.aig.com.br%2Fportal%2Flogin%2Fcallback&response_type=code&state=vDMNFCwd8R6xj89LbhQFnSCUQFUeGofGMZqtOoYKEvQZ33V57LLFs3AcEMjkQd6S&scope=brokerportal%20openid%20email" 
    },
    "Icatu":{
        seguros:["Capitalizacao", "Previdencia"],
        link:"https://portalcorretor.icatuseguros.com.br/casadocorretor/login"
    },
    "PreviSul":{
        seguros:["Vida", "AcidentesPessoais", "Residencial", "Empresarial", "Odonto"],
        link:"https://acesso.previsul.com.br/Account/Login"
    },
    "Zurich":{
        seguros:["Vida", "Auto", "Viagem"],
        link:"https://espacoparceiros.zurich.com.br/" 
    }
}

selectSeguro.addEventListener("change", () => {
    const selectedSeguro = selectSeguro.value;
    const seguradorasComSeguro = [];
    for (const [seguradora, options] of Object.entries(seguroSeguradoraOptions)) {
        if (options.seguros.includes(selectedSeguro)) {
            seguradorasComSeguro.push(seguradora);
        }
    }

    const seguro = () => {
        let seguroArray = ""
        for (let i = 0; i < seguradorasComSeguro.length; i++) {
            const seguradora = seguradorasComSeguro[i];
            const seguradoras = seguroSeguradoraOptions[seguradora]
            
            seguroArray += `<a href="${seguradoras.link}" target="_blank">${seguradora}</a>`;
        }
        return seguroArray
    }
    infoSeguro.innerHTML = `
        <h2>${selectedSeguro}</h2>
        <ul>${seguro()}</ul>
    `;
    if (selectedSeguro === "0") {
        infoSeguro.innerHTML=""
    }
});

selectSeguradora.addEventListener("change", () => {
    const selectedSeguradora = selectSeguradora.value;
    if (!seguroSeguradoraOptions.hasOwnProperty(selectedSeguradora)) {
        infoSeguradora.innerHTML = "";
        return;
    }
    const seguradora = seguroSeguradoraOptions[selectedSeguradora];
    const seguros = seguradora.seguros;
    const link = seguradora.link;

    const gerarSegurosLinks = () => {
        let links = "";
        for (let i = 0; i < seguros.length; i++) {
            const seguro = seguros[i];
            links += `<a href="${link}" target="_blank">${seguro}</a>`;
        }
        return links;
    };

    infoSeguradora.innerHTML = `
        <h2>${selectedSeguradora}</h2>
        <ul>${gerarSegurosLinks()}</ul>`;
});
