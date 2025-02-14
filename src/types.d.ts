export interface Page {
    title: string;
    content: string;
}

export interface Pages {
    [key: string]: Page;
}
