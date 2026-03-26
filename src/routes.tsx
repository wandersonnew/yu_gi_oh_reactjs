import
    Home
from "./home/home"

import ByName from "./search_card/by_name";

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
    }
];

export default router;