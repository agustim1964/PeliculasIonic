import React, { useState, useEffect } from 'react';
import {
  IonPage,IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonSpinner,IonItem 
} from '@ionic/react';
import { getPopularMovies } from '../api/api'; // Importa la funció de l'API

const Home: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]); // Estat per a les pel·lícules
  const [loading, setLoading] = useState(true); // Estat de càrrega
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies(); // Obté les pel·lícules
        setMovies(data); // Desa les pel·lícules a l'estat
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      } finally {
        setLoading(false); // Finalitza la càrrega
      }
    };

    fetchMovies();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <br/><br/><br/> 
        <IonToolbar>

          <IonTitle>Películas en cartelera</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent  style={{  minHeight: "100vh" }}>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <IonSpinner name="crescent" />
          </div>
        ) : (
          movies.map((movie) => (
            <IonCard key={movie.id}>
              <IonCardHeader>
                <IonCardTitle>
                  <IonButton routerLink={`/pelicula/${movie.id}`}>{movie.title}</IonButton>
               </IonCardTitle>
                <IonCardSubtitle>Fecha estreno:{movie.release_date}</IonCardSubtitle>
                <IonCardSubtitle>Puntuación:{movie.vote_average}</IonCardSubtitle>             
              </IonCardHeader>
              <IonCardContent>
                Sinopsis:{movie.overview}
              </IonCardContent>
            </IonCard>

          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
