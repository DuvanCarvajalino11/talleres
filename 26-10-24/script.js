// Componente para el título en el pie de página
class titulosElprofebarrientos extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                div {
                    background-color: green;
                    color: #ffffff;
                    font-size: 1.0em;
                    font-weight: bold;
                    text-align: center;
                    padding: 10px;
                    border-radius: 8px;
                    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
                }
            </style>
            <div>Derechos reservados El profe barrientos</div>
        `;
    }
}
customElements.define("titulos-elprofebarrientos", titulosElprofebarrientos);

// Componente para la fecha actual
class FechaHoy extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                div {
                    font-size: 20px;
                    color: blue;
                }
            </style>
            <div>${this.fecha()}</div>
        `;
    }

    fecha() {
        const today = new Date();
        const dia = today.getDate();
        const mes = today.getMonth() + 1;
        const ano = today.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }
}
customElements.define("fecha-hoy", FechaHoy);

// Componente para la hora actual
class HoraActual extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = `<div id="hora"></div>`;
        this.updateTime();
        setInterval(() => this.updateTime(), 1000); // Actualiza cada segundo
    }

    updateTime() {
        const now = new Date();
        const hora = now.getHours().toString().padStart(2, '0');
        const minutos = now.getMinutes().toString().padStart(2, '0');
        const segundos = now.getSeconds().toString().padStart(2, '0'); // Agregar segundos
        this.shadowRoot.getElementById('hora').textContent = `${hora}:${minutos}:${segundos}`; // Mostrar horas, minutos y segundos
    }
}
customElements.define("hora-actual", HoraActual);

// Componente para el botón de "Ir al carrito"
class IrAlCarrito extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = `
            <style>
                button {
                    background-color: #007bff;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1em;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <button id="carrito-btn">Ir al carrito</button>
        `;

        shadowRoot.getElementById('carrito-btn').addEventListener('click', () => {
            window.open('url_del_carrito', '_blank'); // Cambia 'url_del_carrito' por la URL real de tu carrito.
        });
    }
}
customElements.define("ir-al-carrito", IrAlCarrito);

// Componente para "Ir a ChatGPT"
class IrAChatGPT extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = `
            <style>
                span {
                    color: blue;
                    cursor: pointer;
                    text-decoration: underline;
                }
                span:hover {
                    color: darkblue;
                }
            </style>
            <span id="link">Ir a ChatGPT</span>
        `;

        shadowRoot.getElementById('link').addEventListener('click', () => {
            window.open('https://chat.openai.com', '_blank');
        });
    }
}
customElements.define("ir-a-chatgpt", IrAChatGPT);

// Componente para el botón de búsqueda
class BuscarElprofebarrientos extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = `
            <style>
                input {
                    width: 100%; /* Asegura que el input ocupe el 100% del contenedor */
                    max-width: 1095px; /* Limita el ancho máximo del input */
                    padding: 10px;
                    border: 2px solid #007bff;
                    border-radius: 20px;
                    text-align: center;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Agrega una sombra para un efecto de elevación */
                }
            </style>
            <input type="text" placeholder="Buscar...">
        `;
    }
}
customElements.define("buscar-elprofebarrientos", BuscarElprofebarrientos);
