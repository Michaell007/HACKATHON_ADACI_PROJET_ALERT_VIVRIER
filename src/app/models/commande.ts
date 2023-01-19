import { User } from "./user";

export class Commande {
    id!: number;
    vendeur!: User;
    quantite?: number;
    contact!: string;
    fullName?: string;
}