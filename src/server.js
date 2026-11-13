// import { envConfig } from "./config/env.config.js"

// console.log(`Aplicación: ${envConfig.appName}`);
// console.log(`Puerto: ${envConfig.port}`);
// console.log(`Entorno: ${envConfig.nodeEnv}`);

import ServiceManager from "./managers/ServiceManager.js";

const serviceManager = new ServiceManager();

const newService = await serviceManager.addService({
    name: "Low Fade",
    description: "Corte moderno echo a maquina",
    duration: 60,
    price: 13000,
    category: "Corte",
    available: true
});

console.log("Creado:", newService)

console.log("Buscado: ", await serviceManager.getServiceByID(newService.id))

console.log("Actualizado: ", await serviceManager.updateService(newService.id, { id: 15 }))

console.log("Eliminado: ", await serviceManager.deleteService(newService.id))

console.log(await serviceManager.getServices())