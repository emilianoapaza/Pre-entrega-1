# Backend - Sistema de Turnos y Reservas

## Descripción

Primer entregable de Backend I desarrollado con Node.js y JavaScript. Permite gestionar servicios mediante operaciones CRUD y persistencia en archivos JSON.

## Tecnologías

- Node.js
- JavaScript (ES Modules)
- dotenv
- File System (`node:fs/promises`)

## Instalación

Clonar el repositorio e instalar las dependencias:

```bash
npm install
```

Crear un archivo `.env` en la raíz del proyecto siguiendo el formato de `.env.example`.

## Ejecución

Modo desarrollo:

```bash
npm run dev
```

Modo normal:

```bash
npm start
```

## Variables de entorno

| Variable  | Descripción          |
| --------- | -------------------- |
| PORT      | Puerto de ejecución  |
| NODE_ENV  | Entorno de ejecución |
| APP_NAME  | Nombre del Proyecto  |
| MONGO_URI | Tu uri de mongodb    |

## Recurso: Servicios

Cada servicio contiene:

- id
- name
- description
- duration
- price
- category
- available

Los datos se almacenan en `src/data/services.json`.

## Operaciones disponibles

| Método                  | Descripción                 |
| ----------------------- | --------------------------- |
| getServices()           | Obtiene todos los servicios |
| getServiceById(id)      | Busca un servicio por ID    |
| addService(data)        | Agrega un servicio          |
| updateService(id, data) | Actualiza un servicio       |
| deleteService(id)       | Elimina un servicio         |
