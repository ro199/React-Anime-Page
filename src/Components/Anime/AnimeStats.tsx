import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { IAnimeStats } from "../../Constant/AnimeList";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AnimeStats = ({ animeData }: { animeData: IAnimeStats }) => {
  const { scores, watching, completed, on_hold, dropped, plan_to_watch } =
    animeData.data;

  // Datos para el gráfico de barras
  const barChartData = {
    labels: scores.map((score) => "Puntaje " + score.score),
    datasets: [
      {
        label: "Votos por puntuación",
        data: scores.map((score) => score.votes),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // Datos para el gráfico de pastel
  const pieChartData = {
    labels: ["Viendo", "Completado", "En pausa", "Abandonado", "Plan para ver"],
    datasets: [
      {
        data: [watching, completed, on_hold, dropped, plan_to_watch],
        backgroundColor: [
          "#FF5733",
          "#33FF61",
          "#33B8FF",
          "#AD33FF",
          "#FF33DB",
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Gráfico de Puntuación</h2>
      <Bar data={barChartData} />
      <h2>Estado de Visualización</h2>
      <Pie data={pieChartData} />
    </div>
  );
};

export default AnimeStats;
