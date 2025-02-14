import axios from "axios";
import { Page, Pages } from "./types";

const databaseURL = "https://arsen-js27-default-rtdb.europe-west1.firebasedatabase.app/";

const firebaseApi = {
    async getPage(pageName: Page) {
        try {
            const response = await axios.get(`${databaseURL}/pages/${pageName}.json`);
            return response.data;
        } catch (error) {
            console.error("Ошибка при получении страницы:", error);
            return null;
        }
    },

    async getPages() {
        try {
            const response = await axios.get(`${databaseURL}/pages.json`);
            return response.data;
        } catch (error) {
            console.error("Ошибка при получении всех страниц:", error);
            return null;
        }
    },

    async updatePage(pageName: Page, data: Pages) {
        try {
            await axios.put(`${databaseURL}/pages/${pageName}.json`, data);
            console.log(`Страница "${pageName}" успешно обновлена!`);
        } catch (error) {
            console.error("Ошибка при обновлении страницы:", error);
        }
    },
};
export default firebaseApi;