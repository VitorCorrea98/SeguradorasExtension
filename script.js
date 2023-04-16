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
    },
    "Pottencial":{
        seguros:["Imobiliario", "Residencial", "Empresarial"],
        link:"https://pottencial.com.br/login-unico/"
    },
    "Omint":{
        seguros:["Saude", "Vida", "Viagem", "Odonto"],
        link:"https://www.omint.com.br/minha-omint/login/"
    },
    "PortoSeguro":{
        seguros:["Auto", "Moto", "Residencial", "Viagem", "Vida", "Imobiliaria", "Previdencia"],
        link:"https://corretor.portoseguro.com.br/portal/site/corretoronline/template.LOGIN/"
    },
    "BradescoSeguros":{
        seguros:["Auto", "Residencial", "Vida", "Saude", "Previdencia", "Capitalizacao", "Viagem", "Odonto"],
        link:"https://wwwn.bradescoseguros.com.br/pnegocios2/wps/portal/portaldenegociosnovo/!ut/p/z1/hY5PC4IwGMY_iweP-b6ZhHUbQVJoEEHZLrHZmoI62Wajb9-ga-Jze_784AEKJdCevRvJbKN61np_p-tHnuUH3KTxCXf7GM_kekmyIl4mRQK3uQH1NU6IoOfp3OQIVLaK_96Qnq9SCVSLl9BCR6P2cW3tYLYhhuici7hmT2EqZYQctTJRpTqfhfgPr5WxUE5TMHQlLij_OBIEX-rnozo!/dz/d5/L2dBISEvZ0FBIS9nQSEh/?_ga=2.257506763.1959701967.1681677961-760591573.1681677961"
    },
    "Allianz":{
        seguros:["Auto", "Moto", "Caminhao", "Vida", "Viagem", "Empresarial", "Imobiliaria", "Frota", "Saude"],
        link:"https://www.allianznet.com.br/ngx-epac/public/home"
    },
    "Mapfre":{
        seguros:["Vida", "Residencial", "Investimentos", "Carro", "Moto", "Capitalizacao"],
        link:"https://www.mapfreconnect.com.br/default.asp"
    },
    "Liberty":{
        seguros:["Auto", "Vida", "Residencial", "Caminhao", "Frota", "Imobiliario"],
        link:"https://auth-corretor.libertyseguros.com.br/login?state=hKFo2SByMjZXLVJSLWdrZnNBWFhVaTlCRFRBeGRDTVlRTjZhZqFupWxvZ2luo3RpZNkgUUFTRGlLYkpQbW9VOXFKczFCcnhEWmVZNTJNSkxJOGyjY2lk2SB4czVuQmZwQTZrbDJaN2hmN0N3b0h5U3pwR01ESXJsdQ&client=xs5nBfpA6kl2Z7hf7CwoHySzpGMDIrlu&protocol=oauth2&response_type=code&scope=openid%20email%20profile%20offline_access&redirect_uri=https%3A%2F%2Fnovomeuespacocorretor.libertyseguros.com.br%2Fopenid-connect%2Fgeneric"
    },
    "PASI":{
        seguros:["Vida"],
        link:"https://corretor.portalpasi.com.br/login"
    },
    "Unimed":{
        seguros:["Residencial", "Odonto", "Saude", "Vida", "Previdencia", "Viagem"],
        link:"https://rh-sso.segurosunimed.com.br/auth/realms/unimed-externos/protocol/openid-connect/auth?response_type=code&client_id=portal-da-seguros-3538e5bb-6b57-4f60-a36a-b33fb0fc0f01&state=QUJtT182MjBUZHlEZUxzMFYtVmNReFlHN0F1XzVqQkZtTEE5Qk5VeGxKenZX&redirect_uri=https%3A%2F%2Fportal.segurosunimed.com.br&scope=openid%20offline_access%20profile%20email%20address%20phone%20roles%20web-origins%20microprofile-jwt&code_challenge=5qrc7wvx8nza9jVctxDh-E50XeuFfM8Ok5Ng_gr1WUo&code_challenge_method=S256&nonce=QUJtT182MjBUZHlEZUxzMFYtVmNReFlHN0F1XzVqQkZtTEE5Qk5VeGxKenZX"
    },
    "TokioMarine":{
        seguros:["Viagem", "Auto", "Residencial", "Vida", "Moto", "Empresarial"],
        link:"https://ssoportais3.tokiomarine.com.br/openam/XUI/?realm=TOKIOLFR&goto=http://portalparceiros.tokiomarine.com.br/?_gl=1*5uabg6*_ga*ODEwNDE0MTQ2LjE2ODE2ODEyMDE.*_ga_M3GQZ9PQWS*MTY4MTY4MTIwMS4xLjAuMTY4MTY4MTIwNi41NS4wLjA.&_ga=2.220203100.536697167.1681681201-810414146.1681681201#login/"
    },
    "AXA Brasil":{
        seguros:["Viagem", "Residencial", "Vida", "Frota"],
        link:"https://corretor.axa.com.br/portal-corretor/"
    },
    "Mongeral":{
        seguros:["Vida", "Previdencia", "Investimentos"],
        link:"https://canaldocorretor.mag.com.br/canal-do-corretor/login.htm"
    },

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
