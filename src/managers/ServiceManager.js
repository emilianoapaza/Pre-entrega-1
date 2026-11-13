import { readFile, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";

class ServiceManager {
    constructor() {
        this.path = new URL("../data/services.json", import.meta.url)
    }

    async readServices() {
        const contenido = await readFile(this.path, "utf-8");
        return JSON.parse(contenido)
    }

    async saveServices(services) {
        const contenido = JSON.stringify(services, null, 2)
        await writeFile(this.path, contenido);
    }

    async getServices() {
        return await this.readServices();
    }

    async getServiceByID(id) {
        const services = await this.readServices()
        return services.find(service => service.id === id) || null;
    }

    async addService(serviceData) {
        const requiredFields = [
            "name",
            "description",
            "duration",
            "price",
            "category",
            "available"
        ]

        const isValid = requiredFields.every(field =>
            serviceData[field] !== undefined &&
            serviceData[field] !== null &&
            serviceData[field] !== "")

        if (!isValid) {
            throw new Error("Faltan campos obligatorios")
        }

        const services = await this.readServices();

        const newServices = {
            id: randomUUID(),
            ...serviceData
        }

        services.push(newServices)
        await this.saveServices(services)

        return newServices
    }

    async updateService(id, updateData) {
        const services = await this.readServices()
        const index = services.findIndex(service => service.id === id)

        if (index === -1) {
            return null
        }

        const { id: ignoredID, ...data } = updateData

        services[index] = {
            ...services[index],
            ...data,
            id
        }

        await this.saveServices(services)

        return services[index]
    }

    async deleteService(id) {
        const services = await this.readServices()

        const index = services.findIndex(service => service.id === id);

        if (index === -1) {
            return null;
        }

        const [deleteService] = services.splice(index, 1)

        await this.saveServices(services)

        return deleteService
    }

}

export default ServiceManager;