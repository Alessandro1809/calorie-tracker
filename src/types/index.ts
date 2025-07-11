export interface Features {
    id: number;
    name: string;
    description: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface Activity {
    id: string;
    category: number;
    name: string;
    calories: number;
}