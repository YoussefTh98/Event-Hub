# EventHub

Application web de gestion d'événements et de réservations, développée avec **Angular** (côté client).

## Fonctionnalités

- Connexion d'un utilisateur
- Liste des événements
- Détail d'un événement
- Création d'un nouvel événement
- Réservation d'une place à un événement
- Consultation de ses réservations
- Page « introuvable » pour les routes inconnues

## Technologies

- Angular
- TypeScript
- HTML / CSS
- Node.js et npm

## Structure du projet

```
src/
└── app/
    ├── composants/     # composants réutilisables (ex. en-tête)
    ├── donnees/        # données de l'application
    ├── modeles/        # modèles : evenement, reservation, utilisateur
    ├── pages/          # connexion, liste, detail, nouvel-evenement,
    │                   # reservation, mes-reservations, introuvable
    ├── services/       # services (session, evenements, reservations)
    ├── app.routes.ts   # routes de l'application
    └── app.config.ts   # configuration de l'application
```

## Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/YoussefTh98/EventHub.git
cd EventHub
```

2. Installer les dépendances :

```bash
npm install
```

## Lancer l'application

```bash
ng serve
```

Puis ouvrir [http://localhost:4200](http://localhost:4200) dans le navigateur.

## Commandes utiles

| Commande   | Description                          |
|------------|--------------------------------------|
| `ng serve` | Lance le serveur de développement    |
| `ng build` | Génère la version de production      |
| `ng test`  | Lance les tests unitaires            |

## Conventions de commit

Les messages de commit commencent par le numéro de la tâche :

```
EF-01 : Structure générale de l'application
EF-01 : mise à jour du README
```

## Auteur

Projet réalisé dans le cadre du cours « Framework côté client (Angular) » — 2ème Licence DSI, ISET.
