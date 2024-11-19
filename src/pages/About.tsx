import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const About: React.FC = () => {
  return (
    <IonPage>
      {/* Toolbar de la pàgina */}
      <IonHeader>
      </IonHeader>

      {/* Contingut de la pàgina */}
      <IonContent style={{  minHeight: "100vh" }}>
        <br/><br/>
        <h1>About</h1>
        <p>
          <strong>Autor:</strong> Agustí Masip<br />
          <strong>Aplicación:</strong> Películas<br />
          <strong>Práctica:</strong> Ionic + React 2024
        </p>
      </IonContent>
    </IonPage>
  );
};

export default About;

