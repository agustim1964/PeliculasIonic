import React from "react"

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

const CardInfo = (props)=>{
    const image = "https://image.tmdb.org/t/p/w220_and_h330_face/" + props.pelicula.poster_path;
    return( 
        <>
            <IonCard>
                <img alt="Carátula de la Película" src={image} />
                <IonCardHeader>
                <IonCardTitle>{props.pelicula.title}</IonCardTitle>
                <IonCardSubtitle>{props.pelicula.release_date}</IonCardSubtitle>
                </IonCardHeader>
    
                <IonCardContent>{props.pelicula.overview}</IonCardContent>
            </IonCard>
        </>

    );

}

export default CardInfo;