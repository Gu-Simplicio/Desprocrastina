//lista dos sites educativos
const SITES_EDUCATIVOS = ["github"];
//lista dos sites não educativos
const SITES_PROCRASTINADORES = ["youtube", "instagram", "tiktok", "x"];

//intervalo que checa o site que o usuário está
setInterval(
    () => {
        //captura a url do site
        let url = window.location.host;

        //loop forEach que checa se o site é procrastinador
        SITES_PROCRASTINADORES.forEach((site) => {
            //se a URL conter um site procrastinador
            if(url.includes(site)){
                //seleciona um dos sites educativos aleatóriamente
                let siteEducativo = SITES_EDUCATIVOS[Math.floor(Math.random() * SITES_EDUCATIVOS.length)]

                //redireciona o usuário para um site correto
                alert("Te redirecionando para um site correto!");
                window.location.href = `https://www.${siteEducativo}.com/`; 
            }
        });        
    },
    1000
    //180000
)