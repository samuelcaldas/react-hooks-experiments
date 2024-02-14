"use client"; // This is a client component
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Weather() {
  const { data, error } = useSWR(
    "https://api.openweathermap.org/data/2.5/weather?q=Coronel%20Fabriciano&appid=${process.env.OPENWEATHERMAP_API_KEY}",
    fetcher
  );

  if (error) return <div>Falha ao carregar dados de clima</div>;

  if (!data) return <div>Carregando dados de clima...</div>;

  return (
    <div>
      <h2>Clima em {data.name}</h2>
      <p>
        A temperatura é {Math.round(data.main.temp - 273.15)}°C, 
        a humidade é {data.main.humidity}%, e a velocidade do vento é {data.wind.speed} m/s.
      </p>
      <p>
        A condição do tempo é {data.weather[0].main} ({data.weather[0].description}).
      </p>
    </div>
  );
}