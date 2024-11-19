import {
  IonApp,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuButton,
  IonButtons,
  IonRouterOutlet,
  IonPage,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Pelicula from './pages/Pelicula';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    {/* Menú lateral */}
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menú</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/home">Home</IonItem>
          <IonItem routerLink="/about">About</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>

    {/* Contingut principal */}
    <IonReactRouter>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Películas</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonRouterOutlet>
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/pelicula/:id" exact component={Pelicula} />
           <Route path="/" exact render={() => <Home />} />
        </IonRouterOutlet>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
