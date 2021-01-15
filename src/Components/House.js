const House = [
    {
        name: "gray",
        desc: "the starting point, a nondescript room",
        connections: [
            {
                exitRoom: "blue",
                exitDir: "south"
            },
            {
                exitRoom: "yellow",
                exitDir: "east"
            }
        ]
    },
    {
        name: "blue",
        desc: "A room with a maritime theme",
        connections: [
            {
                exitRoom: "gray",
                exitDir: "north"
            },
            {
                exitRoom: "red",
                exitDir: "east"
            }
        ]
    },
    {
        name: "yellow",
        desc: "Its like being inside a schoolbus",
        connections: [
            {
                exitRoom: "gray",
                exitDir: "west"
            },
            {
                exitRoom: "red",
                exitDir: "south"
            }
        ]
    },
    {
        name: "red",
        desc: "A dim, deeply creepy room",
        connections: [
            {
                exitRoom: "yellow",
                exitDir: "north"
            },
            {
                exitRoom: "blue",
                exitDir: "west"
            }
        ]
    }
];

export default House;