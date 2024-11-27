const API_BASE = "https://bhawat-gita-api.onrender.com/api/";
const customer = "chapters";
const sloks = "sloks"

export const getChapters = async () => {
    try {
        let response = await fetch(`${API_BASE}${customer}`);
        let responseJson = await response.json();
        return responseJson.data;
    } catch(e) {
        throw e;
    }
}

export const getVerses = async (chapterNo, verseNo) => {
    try {
        let response = await fetch(`${API_BASE}${sloks}/${chapterNo}`);
        let responseJson = await response.json();
        return responseJson.data;
    } catch(e) {
        throw e;
    }
}