import
    Home
from "./home/home"

import ByName from "./search_card/by_name";
import ByArchetype from "./search_card/by_archetype";

const router = [
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "home", 
                element: <Home />
            }
        ]
    },
    {
        path: "/search_by_name",
        element: <ByName />
    },
    {
        path:"/search_by_archetype",
        element: <ByArchetype />
    }
];

export default router;