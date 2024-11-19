// src/pages/Pelicula.tsx
import React, { useEffect, useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from "@ionic/react";
import { useParams } from "react-router-dom";
import { getMovieData } from "../api/api"; // L'importació de la funció per obtenir les dades de la pel·lícula

const Pelicula: React.FC = () => {
  const { id } = useParams<{ id: string }>();  // Obtenim l'ID de la pel·lícula des de la URL
  const [movie, setMovie] = useState<any>(null);


  // Carreguem les dades de la pel·lícula quan el component es munta
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await getMovieData(id); // Cridem l'API per obtenir les dades de la pel·lícula
        setMovie(movieData);
      } catch (error) {
        console.log("Error carregant la pel·lícula", error);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>; // Mostra un missatge de càrrega mentre es recuperen les dades

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{movie.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent   style={{  minHeight: "100vh" }}>
        <IonCard>
          <IonImg src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <IonCardHeader>
            <IonCardTitle>{movie.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>{movie.overview}</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Pelicula;
