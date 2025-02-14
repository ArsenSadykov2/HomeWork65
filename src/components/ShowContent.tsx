import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Page} from "../types";
import firebaseApi from "../globalContent.ts";

const ContentShow = () => {
    const { pageName } = useParams<{ pageName: string }>();
    const [page, setPage] = useState<Page | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!pageName) {
            console.error("Page name is undefined");
            navigate("/pages/home");
            return;
        }

        const fetchPage = async () => {
            try {
                const data = await firebaseApi.getPage(pageName);
                if (data) {
                    setPage(data);
                } else {
                    console.error("Page not found");
                    navigate("/pages/home");
                }
            } catch (error) {
                console.error("Error fetching page:", error);
                navigate("/pages/home");
            }
        };

        fetchPage();
    }, [pageName, navigate]);

    if (!page) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{page.title}</h1>
            <p>{page.content}</p>
        </div>
    );
};

export default ContentShow;