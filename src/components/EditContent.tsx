import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pages } from "../types";
import firebaseApi from "../globalContent.ts";

const ContentEditor = () => {
    const [pages, setPages] = useState<Pages>({});
    const [selectedPage, setSelectedPage] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPages = async () => {
            const data = await firebaseApi.getPages();
            setPages(data);
        };
        fetchPages();
    }, []);

    const handleSave = async () => {
        await firebaseApi.updatePage(selectedPage, { title: pages[selectedPage].title, content });
        navigate(`/pages/${selectedPage}`);
    };

    return (
        <div className="container mt-4">
            <h2>Edit Page Content</h2>

            <div className="form-group mb-3">
                <label htmlFor="pageSelect" className="form-label">
                    Select a page
                </label>
                <select
                    id="pageSelect"
                    className="form-select"
                    value={selectedPage}
                    onChange={(e) => setSelectedPage(e.target.value)}
                >
                    <option value="">Select a page</option>
                    {Object.keys(pages).map((page) => (
                        <option key={page} value={page}>
                            {pages[page].title}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="contentTextarea" className="form-label">
                    Content
                </label>
                <textarea
                    id="contentTextarea"
                    className="form-control"
                    rows={6}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Edit content..."
                />
            </div>

            <button onClick={handleSave} className="btn btn-primary">
                Save
            </button>
        </div>
    );
};

export default ContentEditor;
