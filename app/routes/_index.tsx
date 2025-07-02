import { useLoaderData } from "@remix-run/react";

type Weather = {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

export const loader = async () => {
  const response = await fetch("http://backend:80/weatherforecast");
  if (!response.ok) {
    throw new Error("Error al obtener el clima");
  }
  return await response.json();
};

export default function Index() {
  const data = useLoaderData<Weather[]>();

  return (
    <div style={{ fontFamily: "system-ui", padding: "2rem" }}>
      <h1>🌤️ Weather Forecast</h1>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>
            <strong>{item.date}:</strong> {item.summary} - {item.temperatureC}°C / {item.temperatureF}°F
          </li>
        ))}
      </ul>
    </div>
  );
}

// Trigger redeploy on GitHub Actions 🚀
// Trigger redeploy on GitHub Actions 🚀
