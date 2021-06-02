let visits = [
    { id: 0, lekarz: 'Internista', dzien: '22.04.2021', godzina: '8:00', status: 'wolna' },
    { id: 1, lekarz: 'Internista', dzien: '22.04.2021', godzina: '9:00', status: 'wolna' },
    { id: 2, lekarz: 'Internista', dzien: '22.04.2021', godzina: '10:00', status: 'wolna' },
    { id: 3, lekarz: 'Internista', dzien: '22.04.2021', godzina: '11:00', status: 'wolna' },
    { id: 4, lekarz: 'Internista', dzien: '22.04.2021', godzina: '12:00', status: 'wolna' },
    { id: 5, lekarz: 'Kardiolog', dzien: '23.04.2021', godzina: '8:00', status: 'wolna' },
    { id: 6, lekarz: 'Kardiolog', dzien: '23.04.2021', godzina: '9:00', status: 'wolna' },
    { id: 7, lekarz: 'Kardiolog', dzien: '23.04.2021', godzina: '10:00', status: 'wolna' },
    { id: 8, lekarz: 'Kardiolog', dzien: '23.04.2021', godzina: '11:00', status: 'wolna' },
    { id: 9, lekarz: 'Kardiolog', dzien: '23.04.2021', godzina: '12:00', status: 'wolna' },
    { id: 10, lekarz: 'Rodzinny', dzien: '24.04.2021', godzina: '8:00', status: 'wolna' },
    { id: 11, lekarz: 'Rodzinny', dzien: '24.04.2021', godzina: '9:00', status: 'wolna' },
    { id: 12, lekarz: 'Rodzinny', dzien: '24.04.2021', godzina: '10:00', status: 'wolna' },
    { id: 13, lekarz: 'Rodzinny', dzien: '24.04.2021', godzina: '11:00', status: 'wolna' },
    { id: 14, lekarz: 'Rodzinny', dzien: '24.04.2021', godzina: '12:00', status: 'wolna' },
    { id: 15, lekarz: 'Alergolog', dzien: '25.04.2021', godzina: '8:00', status: 'wolna' },
    { id: 16, lekarz: 'Alergolog', dzien: '25.04.2021', godzina: '9:00', status: 'wolna' },
    { id: 17, lekarz: 'Alergolog', dzien: '25.04.2021', godzina: '10:00', status: 'wolna' },
    { id: 18, lekarz: 'Alergolog', dzien: '25.04.2021', godzina: '11:00', status: 'wolna' },
    { id: 19, lekarz: 'Alergolog', dzien: '25.04.2021', godzina: '12:00', status: 'wolna' },
    { id: 20, lekarz: 'Endokrynolog', dzien: '26.04.2021', godzina: '8:00', status: 'wolna' },
    { id: 21, lekarz: 'Endokrynolog', dzien: '26.04.2021', godzina: '9:00', status: 'wolna' },
    { id: 22, lekarz: 'Endokrynolog', dzien: '26.04.2021', godzina: '10:00', status: 'wolna' },
    { id: 23, lekarz: 'Endokrynolog', dzien: '26.04.2021', godzina: '11:00', status: 'wolna' },
    { id: 24, lekarz: 'Endokrynolog', dzien: '26.04.2021', godzina: '12:00', status: 'wolna' }
];

export const getVisits = (req, res) => {
    res.send(visits);
};

export const getVisitsBySpec = (req, res) => {
    const { name } = req.params;
    let foundVisit = visits.filter(visit => visit.lekarz === name&&visit.status==='wolna');
    res.send(foundVisit);
};
export const reserveVisit = (req, res) => {
    const { lekarz, dzien, godzina } = req.params;
    let foundVisit = visits.find(visit => visit.lekarz === lekarz && visit.dzien === dzien && visit.godzina === godzina);
    let id = foundVisit.id;
    visits[id] = { id: foundVisit.id, lekarz:foundVisit.lekarz, dzien: foundVisit.dzien, godzina:foundVisit.godzina, status: 'zarezerwowana'};
    res.send('done');
};
