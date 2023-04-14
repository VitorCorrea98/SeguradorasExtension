const selectSeguro = document.getElementById("seguro");
const infoSeguro = document.getElementById("info-seguro");
const infoSeguradora = document.getElementById("info-seguradora");
const selectSeguradora = document.getElementById("seguradoras");

selectSeguro.addEventListener("change", () => { 
    const selectedSeguro = selectSeguro.value;

    if (selectedSeguro === "0") {
        infoSeguro.innerHTML = ``
    } else if (selectedSeguro === "vida") {
        infoSeguro.innerHTML = `
        <h2>Seguro de Vida</h2>
        <ul>
            <a href="https://corretor.sulamericaseguros.com.br/" target="_blank">SulAmerica</a>
            <a href="https://www.minutoseguros.com.br/area-logada/#/" target="_blank">SOMPO</a>
            <a href="https://login.metlife.com.br/login/dynamic/Login.action" target="_blank">MetLife</a>
            <a href="https://plataforma.juntoseguros.com/" target="_blank">Junto Seguros</a>
        </ul>`;
    } else if (selectedSeguro === "frota") {
        infoSeguro.innerHTML =`
        <h2>Seguro de Frota</h2>
        <ul>
            
        </ul>`;
    } else if (selectedSeguro === "residencial") {
        infoSeguro.innerHTML = `
        <h2>Seguro Residencial</h2>
        <ul>
            <a href="https://www.minutoseguros.com.br/area-logada/#/" target="_blank">SOMPO</a>
            <a href="https://plataforma.juntoseguros.com/" target="_blank">Junto Seguros</a>
        </ul>`;
    } else if (selectedSeguro === "auto") {
        infoSeguro.innerHTML = `
        <h2>Seguro Auto</h2>
        <ul>
            <a href="https://www.minutoseguros.com.br/area-logada/#/" target="_blank">SOMPO</a>
            <a href="https://login.metlife.com.br/login/dynamic/Login.action" target="_blank">MetLife</a>
            <a href="https://plataforma.juntoseguros.com/" target="_blank">Junto Seguros</a>
        </ul>`;
    } else if (selectedSeguro === "moto") {
        infoSeguro.innerHTML = `
        <h2>Seguro Moto</h2>
        <ul>
        
        </ul>`;
    } else if (selectedSeguro === "caminhao") {
        infoSeguro.innerHTML = `
        <h2>Seguro Caminhao</h2>
        <ul>
        
        </ul>`;
    } else if (selectedSeguro === "viagem") {
        infoSeguro.innerHTML = `
        <h2>Seguro Viagem</h2>
        <ul>
            <a href="https://corretor.sulamericaseguros.com.br/" target="_blank">SulAmerica</a>
            <a href="https://www.minutoseguros.com.br/area-logada/#/" target="_blank">SOMPO</a>
            <a href="https://plataforma.juntoseguros.com/" target="_blank">Junto Seguros</a>
        </ul>`;
    } else if (selectedSeguro === "empresarial") {
        infoSeguro.innerHTML = `
        <h2>Seguro Empresarial</h2>
        <ul>
            <a href="https://www.minutoseguros.com.br/area-logada/#/" target="_blank">SOMPO</a>
        </ul>`;
    } else if (selectedSeguro === "imobiliario") {
        infoSeguro.innerHTML = `
        <h2>Seguro Imobiliario</h2>
        <ul>
        
        </ul>`;
    } else if (selectedSeguro === "saude") {
        infoSeguro.innerHTML = `
        <h2>Seguro Saude</h2>
        <ul>
            <a href="https://corretor.sulamericaseguros.com.br/" target="_blank">SulAmerica</a>
            <a href="https://login.metlife.com.br/login/dynamic/Login.action" target="_blank">MetLife</a>
        </ul>`;
    } else if (selectedSeguro === "odonto") {
        infoSeguro.innerHTML = `
        <h2>Seguro Odonto</h2>
        <ul>
            <a href="https://corretor.sulamericaseguros.com.br/" target="_blank">SulAmerica</a>
            <a href="https://login.metlife.com.br/login/dynamic/Login.action" target="_blank">MetLife</a>
        </ul>`;
    } else if (selectedSeguro === "previdencia") {
        infoSeguro.innerHTML = `
        <h2>Seguro Previdencia</h2>
        <ul>
            <a href="https://corretor.sulamericaseguros.com.br/" target="_blank">SulAmerica</a>
        </ul>`;
    } else if (selectedSeguro === "capitalizacao") {
        infoSeguro.innerHTML = `
        <h2>Seguro Capitalizacao</h2>
        <ul>
            <a href="https://corretor.sulamericaseguros.com.br/" target="_blank">SulAmerica</a>
        </ul>`;
    } else if (selectedSeguro === "investimentos") {
        infoSeguro.innerHTML = `
        <h2>Seguro Investimentos</h2>
        <ul>
            <a href="https://corretor.sulamericaseguros.com.br/" target="_blank">SulAmerica</a>
        </ul>`;
    } else if (selectedSeguro === "acidentesPessoais") {
        infoSeguro.innerHTML = `
        <h2>Seguro Acidentes Pessoais</h2>
        <ul>
            <a href="https://www.minutoseguros.com.br/area-logada/#/" target="_blank">SOMPO</a>
        </ul>`
    }
});

selectSeguradora.addEventListener("change", () => {
    const selectedSeguradora = selectSeguradora.value;

    if (selectedSeguradora === "0") {
        infoSeguradora.innerHTML = ``
    } else if (selectedSeguradora === "sulamerica") {
        infoSeguradora.innerHTML = `
        <h2>SulAmerica</h2>
        <ul>
            <a href="https://corretor.sulamericaseguros.com.br" target="_blank">Odonto</a>
            <a href="https://corretor.sulamericaseguros.com.br" target="_blank">Saude</a>
            <a href="https://corretor.sulamericaseguros.com.br" target="_blank">Viagem</a>
            <a href="https://corretor.sulamericaseguros.com.br" target="_blank">Previdencia</a>
            <a href="https://corretor.sulamericaseguros.com.br" target="_blank">Vida</a>
            <a href="https://corretor.sulamericaseguros.com.br" target="_blank">Capitalizacao</a>
            <a href="https://corretor.sulamericaseguros.com.br" target="_blank">Investimentos</a>
        </ul>`;
    } else if (selectedSeguradora === "sompo") {
        infoSeguradora.innerHTML = `
        <h2>SOMPO</h2>
        <ul>
            <a href="https://www.minutoseguros.com.br/area-logada/#/" target="_blank">Acidentes Pessoais</a>
            <a href="https://www.minutoseguros.com.br/area-logada/#/" target="_blank">Empresarial</a>
            <a href="https://www.minutoseguros.com.br/area-logada/#/" target="_blank">Viagem</a>
            <a href="https://www.minutoseguros.com.br/area-logada/#/" target="_blank">Auto</a>
            <a href="https://www.minutoseguros.com.br/area-logada/#/" target="_blank">Residencial</a>
            <a href="https://www.minutoseguros.com.br/area-logada/#/" target="_blank">Vida</a>
        </ul>`;
    }else if (selectedSeguradora === "metLife") {
        infoSeguradora.innerHTML = `\
        <h2>MetLife</h2>
        <ul>
            <a href="https://login.metlife.com.br/login/dynamic/Login.action" target="_blank">Vida</a>
            <a href="https://login.metlife.com.br/login/dynamic/Login.action" target="_blank">Saude</a>
            <a href="https://login.metlife.com.br/login/dynamic/Login.action" target="_blank">Odonto</a>
            <a href="https://login.metlife.com.br/login/dynamic/Login.action" target="_blank">Auto</a>
        </ul>`;
    }else if (selectedSeguradora === "juntoSeguros") {
        infoSeguradora.innerHTML = `
        <h2>Juntos Seguros</h2>
        <ul>
            <a href="https://plataforma.juntoseguros.com/" target="_blank">Auto</a>
            <a href="https://plataforma.juntoseguros.com/" target="_blank">Residencial</a>
            <a href="https://plataforma.juntoseguros.com/" target="_blank">Vidas</a>
            <a href="https://plataforma.juntoseguros.com/" target="_blank">Viagem</a>
        </ul>`
    };
});