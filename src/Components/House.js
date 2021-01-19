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
        desc: "You hear a Blue Note jazz compilation",
        connections: [
            {
                exitRoom: "gray",
                exitDir: "north"
            },
            {
                exitRoom: "red",
                exitDir: "east"
            },
            {
                exitRoom: "lavender",
                exitDir: "west"
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
            },
            {
                exitRoom: "pink",
                exitDir: "north"
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
            },
            {
                exitRoom: "fuchsia",
                exitDir: "south"
            }
        ]
    },
    {
        name: "pink",
        desc: "Like the girls toy aisle",
        connections: [
            {
                exitRoom: "yellow",
                exitDir: "south"
            },
            {
                exitRoom: "orange",
                exitDir: "west"
            }
        ]
    },
    {
        name: "orange",
        desc: "Smells like citrus",
        connections: [
            {
                exitRoom: "pink",
                exitDir: "east"
            },
            {
                exitRoom: "green",
                exitDir: "west"
            }
        ]
    },
    {
        name: "green",
        desc: "Lush and verdant",
        connections: [
            {
                exitRoom: "orange",
                exitDir: "east"
            },
            {
                exitRoom: "purple",
                exitDir: "south"
            }
        ]
    },
    {
        name: "purple",
        desc: "A princely room",
        connections: [
            {
                exitRoom: "green",
                exitDir: "north"
            },
            {
                exitRoom: "aqua",
                exitDir: "west"
            },
            {
                exitRoom: "lavender",
                exitDir: "south"
            }
        ]
    },
    {
        name: "aqua",
        desc: "A nautically themed room",
        connections: [
            {
                exitRoom: "purple",
                exitDir: "east"
            }
        ]
    },
    {
        name: "lavender",
        desc: "It smells pretty good in here",
        connections: [
            {
                exitRoom: "purple",
                exitDir: "north"
            },
            {
                exitRoom: "blue",
                exitDir: "east"
            }
        ]
    },
    {
        name: "fuchsia",
        desc: "This room makes you dizzy",
        connections: [
            {
                exitRoom: "red",
                exitDir: "north"
            },
            {
                exitRoom: "wheat",
                exitDir: "east"
            }
        ]
    },
    {
        name: "wheat",
        desc: "Amber waves of grain",
        connections: [
            {
                exitRoom: "fuchsia",
                exitDir: "west"
            },
            {
                exitRoom: "plum",
                exitDir: "east"
            },
            {
                exitRoom: "tomato",
                exitDir: "north"
            }
        ]
    },
    {
        name: "tomato",
        desc: "A summertime favorite",
        connections: [
            {
                exitRoom: "wheat",
                exitDir: "south"
            },
            {
                exitRoom: "turquoise",
                exitDir: "east"
            }
        ]
    },
    {
        name: "turquoise",
        desc: "A lot of jewelry for sale in here",
        connections: [
            {
                exitRoom: "tomato",
                exitDir: "west"
            },
            {
                exitRoom: "orchid",
                exitDir: "north"
            },
            {
                exitRoom: "plum",
                exitDir: "south"
            }
        ]
    },
    {
        name: "plum",
        desc: "Professor Plum, library, letter opener",
        connections: [
            {
                exitRoom: "wheat",
                exitDir: "west"
            },
            {
                exitRoom: "turquoise",
                exitDir: "north"
            }
        ]
    },
    {
        name: "orchid",
        desc: "Flowers grow all over the walls",
        connections: [
            {
                exitRoom: "chartreuse",
                exitDir: "west"
            },
            {
                exitRoom: "maroon",
                exitDir: "north"
            },
            {
                exitRoom: "turquoise",
                exitDir: "south"
            }
        ]
    },
    {
        name: "chartreuse",
        desc: "The end",
        connections: [
            {
                exitRoom: "orchid",
                exitDir: "east"
            }
        ]
    },
    {
        name: "maroon",
        desc: "In vino veritas",
        connections: [
            {
                exitRoom: "orchid",
                exitDir: "south"
            }
        ]
    }
];

export default House;