import dotenv from "dotenv"

dotenv.config()

// Fail-Fast: si falta una configuracion indipensable, la aplicacion debe fallar inmediatamente con un mensaje claro.
// if (!process.env.MONGO_URI) {
//     throw new Error("Falta configurar MONGO_URI")
// }

const requiredVariables = ["MONGO_URI"]

for (const envVar of requiredVariables) {
    if (!process.env[envVar]) {
        throw new Error(`[Config Error] Falta configurar la variable de entorno obligatoria: "${envVar}". Revisa tu archivo .env.`);
    }
}

export const envConfig = {
    port: Number(process.env.PORT) || 8080,
    nodeEnv: process.env.NODE_ENV || "development",
    appName: process.env.APP_NAME || "Sistema Backend",
    mongoUri: process.env.MONGO_URI
}


// process es un objeto global de NodeJS que proporciona informacion y control sobre el proceso actual en el que se esta ejecutando aplicacion.

// process.env es un objeto NodeJS que almacena y permite acceder a las varibles de entorno del sistema operativo o del proceso en el que se esta ejecutando la aplicacion.

// dotenv es una dependencia que lee las variables definidas en un archivo .env y las incopora al objeto process.env