export type Categorie= 'atelier' | 'conference' | 'competition' | 'sortie';
export interface Evenement {
    id: number;
    titre: string;
    description: string;
    categorie: Categorie;
    club: string; // exemple : "Club de Robotique", "Club de Programmation", "Club de Design"
    date: Date; // date et heure de début de l'événement
    lieu: string;
    capacite: number; // nombre total de places disponibles pour l'événement
    placesReservees: number;
    gratuit: boolean;// true si l'événement est gratuit, false sinon
}