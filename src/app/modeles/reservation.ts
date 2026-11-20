export interface Reservation {
    id: number;
    evenementId: number; // ID de l'événement réservé
    email: string; // email de l'utilisateur qui a fait la réservation
    nbPlaces: number; // nombre de places réservées
    telephone: string; // numéro de téléphone de l'utilisateur qui a fait la réservation
    dateReservation: Date; // date et heure de la réservation
}