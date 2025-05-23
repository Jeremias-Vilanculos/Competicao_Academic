// Lista de eventos simulada (pode vir de uma API futuramente)
const eventos = [
  {
    titulo: "Hackathon de Inovação",
    data: "5 de junho de 2025",
    local: "Online"
  },
  {
    titulo: "Concurso Nacional de Programação",
    data: "15 de julho de 2025",
    local: "Presencial - Maputo"
  },
  {
    titulo: "Desafio Universitário de Startups",
    data: "25 de agosto de 2025",
    local: "Online"
  }
];

const container = document.getElementById("eventos");

eventos.forEach(evento => {
  const div = document.createElement("div");
  div.className = "col-md-4";

  div.innerHTML = `
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">${evento.titulo}</h5>
        <p class="card-text"><strong>Data:</strong> ${evento.data}</p>
        <p class="card-text"><strong>Local:</strong> ${evento.local}</p>
        <a href="#" class="btn btn-primary">Ver detalhes</a>
      </div>
    </div>
  `;
  container.appendChild(div);
});
