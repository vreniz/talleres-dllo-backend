import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.json());


const dataPath = path.join(__dirname, '../datos.json');
const users = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Endpoint 1: Retornar usuarios por hobby
app.get('/users/hobby', (req: Request, res: Response) => {
    const { hobby } = req.query;
    const filteredUsers = users.filter((user: any) => user.hobbies.includes(hobby));
    res.json(filteredUsers);
});

// Endpoint 2: Verificar si un usuario existe por ID
app.get('/users/exists', (req: Request, res: Response) => {
    const { id } = req.query;
    const userExists = users.some((user: any) => user.id == id);
    res.json({ exists: userExists });
});

// Endpoint 3: Retornar experiencia total del equipo
app.get('/users/team-experience', (req: Request, res: Response) => {
    const { team } = req.query;
    
    const teamUsers = users.filter((user: any) => user.team === team);
    const totalExperience = teamUsers.reduce((acc: number, user: any) => acc + user.years, 0);
    res.json({ totalExperience });
});

// Endpoint 4: Retornar pilotos por facción
app.get('/users/by-faction', (req: Request, res: Response) => {
    const { faction } = req.query;

    const factionUsers = users.filter((user: any) => user.faction === faction);
    res.json(factionUsers);
});

// Endpoint 5: Registrar un nuevo usuario
app.post('/users', (req: Request, res: Response) => {
    const { id, name, hobbies, years, team, faction } = req.body;
    if (!id || !name || !hobbies || !years || !team || !faction) {
      
    }

    const newUser = { id, name, hobbies, years, team, faction };
    users.push(newUser);

    
    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));

    res.status(201).json(newUser);
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
