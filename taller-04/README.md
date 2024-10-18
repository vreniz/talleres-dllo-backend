# Taller-04: API 



- Node.js (versión 18.x o superior)
- npm (viene con Node.js)
- nvm (Node Version Manager) para gestionar diferentes versiones de Node.js

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/taller-04.git

2.
    ```bash
    npm install express
    npm install
    
4.   nvm use 18
   
5.   ```bash
     npm install -g typescript
     npm install -g ts-node

     EJECUCION: npx ts-node taller-04/src/index.ts
Si todo está correctamente configurado:  Server running on http://localhost:3000

*PROBAR ENDPOINTS*
GET /users/hobby?hobby=guitar
* Método: GET
* URL: http://localhost:3000/users/hobby?hobby=guitar
* Resultado: Retornará los usuarios que tienen el hobby "guitar".
GET /users/exists?id=21
* Método: GET
* URL: http://localhost:3000/users/exists?id=21
* Resultado: Verifica si el usuario con ID 21 existe.
GET /users/team-experience?team=clscwe
* Método: GET
* URL: http://localhost:3000/users/team-experience?team=clscwe
* Resultado: Retorna la experiencia total del equipo clscwe.
GET /users/by-faction?faction=Rebels
* Método: GET
* URL: http://localhost:3000/users/by-faction?faction=Rebels
* Resultado: Retorna los usuarios que pertenecen a la facción "Rebels".
POST /users para agregar un nuevo usuario:
* Método: POST
* URL: http://localhost:3000/users
* Body (JSON):{

               }







