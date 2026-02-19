export const database = {
    fish: [
        {
            name: "Nemo",
            species: "Clownfish",
            length: 3,
            location: "Red Sea",
            diet: "Omnivore",
            image: "https://as2.ftcdn.net/v2/jpg/02/41/76/63/1000_F_241766337_xuT61U7dGGJA8bnd5vpDtDp74LFglPKY.jpg"
        },
        {
            name: "Dory",
            species: "Blue Tang",
            length: 5,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://as2.ftcdn.net/v2/jpg/18/94/93/87/1000_F_1894938796_oaZY9UULaJPuI9RgFqwE9ZjHA9m4sR2a.jpg"
        },
        {
            name: "Bubbles",
            species: "Yellow Tang",
            length: 5,  // Divisible by 5
            location: "Hawaii",
            diet: "Herbivore",
            image: "https://www.aquariumofpacific.org/images/made_new/email_images-yellow_tang_in_front_of_coral_600_q85.jpg"
        },
        {
            name: "Gill",
            species: "Moorish Idol",
            length: 9,  // Divisible by 3
            location: "Indian Ocean",
            diet: "Omnivore",
            image: "https://greatbarrierreeftours.com/files/2025/02/moorish-idol-4.jpg"
        },
        {
            name: "Bloat",
            species: "Porcupine Pufferfish",
            length: 10,  // Divisible by 5
            location: "Caribbean Sea",
            diet: "Carnivore",
            image: "https://aquaticcollection.com/cdn/shop/files/PorcupinePuffer_Puff.jpg?v=1730662484&width=823"
        },
        {
            name: "Peach",
            species: "Starfish",
            length: 4,  // Not divisible by 3 or 5
            location: "Mediterranean Sea",
            diet: "Carnivore",
            image: "https://a-z-animals.com/media/2021/08/Slowest-Animals_-Starfish.jpg"
        },
        {
            name: "Gurgle",
            species: "Royal Gramma",
            length: 4,  // Not divisible by 3
            location: "Atlantic Ocean",
            diet: "Carnivore",
            image: "https://www.abyssaquatics.co.uk/wp-content/uploads/2020/10/83587.jpg"
        },
        {
            name: "Jacques",
            species: "Mantis Shrimp",
            length: 3,  // Divisible by 3
            location: "Coral Reefs",
            diet: "Omnivore",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Odontodactylus_scyllarus_R%C3%A9union.jpg/500px-Odontodactylus_scyllarus_R%C3%A9union.jpg"
        },
        {
            name: "Merlin",
            species: "Blue Marlin",
            length: 120,  // Divisible by 3 AND 5
            location: "Atlantic Ocean",
            diet: "Carnivore",
            image: "https://pelagicgear.com/cdn/shop/articles/Blue_Marlin_Profile-HEADER-2.jpg?v=1619123834"
        },
        {
            name: "Squirt",
            species: "Sea Turtle",
            length: 18,  // Divisible by 3
            location: "Pacific Ocean",
            diet: "Omnivore",
            image: "https://www.fisheries.noaa.gov/s3//styles/full_width/s3/dam-migration/hawksbill_sea_turtle.jpg?itok=cxzcge8K"
        },
        {
            name: "Bruce",
            species: "Great White Shark",
            length: 170,  // Divisible by 5
            location: "Coastal Waters",
            diet: "Carnivore",
            image: "https://th-thumbnailer.cdn-si-edu.com/S012TuiqXpAynbXaSL4f6jegqpk=/909x663/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ae/98/ae980f74-fa29-4c42-9aff-eea13c2c1971/great_white_shark_south_africa.jpg"
        },
        {
            name: "Anchor",
            species: "Hammerhead Shark",
            length: 156,  // Divisible by 3
            location: "Tropical Waters",
            diet: "Carnivore",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Scalloped_Hammerhead_Shark_Sphyrna_Lewini_%28226845659%29.jpeg/500px-Scalloped_Hammerhead_Shark_Sphyrna_Lewini_%28226845659%29.jpeg"
        },
        {
            name: "Chum",
            species: "Mako Shark",
            length: 154,  // Not divisible by 3 or 5
            location: "Open Ocean",
            diet: "Carnivore",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Shortfin_mako_%28Isurus_oxyrinchus%29.jpg/500px-Shortfin_mako_%28Isurus_oxyrinchus%29.jpg"
        },
        {
            name: "Sheldon",
            species: "Seahorse",
            length: 1,  // Not divisible by 3 or 5
            location: "Coral Reefs",
            diet: "Carnivore",
            image: "https://cdn.shopify.com/s/files/1/0016/6959/5189/files/sea-horse-swimming-hippocampus_1024x1024.jpg?v=1563490115"
        },
        {
            name: "Pearl",
            species: "Octopus",
            length: 8,  // Not divisible by 3 or 5
            location: "Pacific Ocean",
            diet: "Carnivore",
            image: "https://hastingsaquarium.co.uk/wp-content/uploads/2023/07/iStock-655094820.jpg"
        },
        {
            name: "Claude",
            species: "Moray Eel",
            length: 16,  // Not divisible by 3 or 5
            location: "Tropical Waters",
            diet: "Carnivore",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Moray_eel.jpg/500px-Moray_eel.jpg"
        }
    ],
    tips: [
        {
            topic: "Water Temperature",
            content: "Maintain a consistent water temperature between 75-80°F (24-27°C) for most tropical fish."
        },
        {
            topic: "Water Quality",
            content: "Keep water parameters stable and perform regular water changes."
        },
        {
            topic: "Feeding",
            content: "Feed your fish a varied diet of high-quality flakes, pellets, and occasional live or frozen foods."
        },
        {
            topic: "Tank Size",
            content: "Provide an appropriately sized tank for your fish to ensure they have enough space to swim and thrive."
        },
        {
            topic: "Compatibility",
            content: "Research the compatibility of different fish species before adding them to the same tank to prevent aggression and stress."
        },
        {
            topic: "Aquarium Maintenance",
            content: "Regularly clean the tank, filter, and decorations to prevent algae buildup and maintain a healthy environment for your fish."
        },
        {
            topic: "Lighting",
            content: "Provide appropriate lighting for your aquarium, as it can affect the health and behavior of your fish."
        },
    ],
    locations: [
        {
            name: "Great Barrier Reef",
            description: "The world's largest coral reef system, located off the coast of Queensland, Australia.",
            country: "Australia"
        },
        {
            name: "Amazon River Basin",  
            description: "A vast tropical rainforest region in South America, home to diverse aquatic life.",
            country: "Brazil"
        },
        {
            name: "Red Sea",
            description: "A seawater inlet of the Indian Ocean, located between Africa and Asia, known for its rich marine biodiversity.",
            country: "Egypt"
        },
        {
            name: "Indian Ocean",
            description: "The third-largest ocean, bounded by Asia, Africa, and Australia, with diverse marine ecosystems.",
            country: "Multiple" 
        }
    ]
}