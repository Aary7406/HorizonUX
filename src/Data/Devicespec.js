// src/data.js (or any path you prefer, e.g., src/components/data.js)
export const devicesData = [
  {
    id: 'a30',
    name: 'Samsung Galaxy A30',
    image: './deviceimg/A30.webp', // Assuming deviceimg is in the public folder
    details: 'Detailed information about the Samsung Galaxy A30. Features include a Super AMOLED display, Exynos 7904 chipset, and a dual-camera setup. Maintained by Lunesh. This device offers a good balance of features and affordability, making it a popular choice in its segment. It received regular security updates and a couple of major Android OS upgrades during its support lifecycle.',
    specifications: {
      display: "6.4-inch Super AMOLED",
      chipset: "Exynos 7904",
      ram: "3GB/4GB",
      storage: "32GB/64GB",
      battery: "4000 mAh"
    }
  },
  {
    id: 's20fe',
    name: 'Samsung Galaxy S20 FE',
    image: './deviceimg/S20FE.webp', // Assuming deviceimg is in the public folder
    details: 'The Samsung Galaxy S20 FE (Fan Edition) boasts a 120Hz display, Snapdragon 865/Exynos 990 (region dependent), and a versatile triple-camera system. Maintained by Lunesh. It was designed to bring flagship features to a more accessible price point and has been well-received for its performance and camera quality. It supports 5G connectivity.',
    specifications: {
      display: "6.5-inch Super AMOLED, 120Hz",
      chipset: "Snapdragon 865 / Exynos 990",
      ram: "6GB/8GB",
      storage: "128GB/256GB",
      battery: "4500 mAh"
    }
  },
  // Add more devices here
];
