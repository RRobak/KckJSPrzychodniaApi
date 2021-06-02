import express from 'express';

import {getVisits,getVisitsBySpec,reserveVisit} from'../controllers/visits.js';

const router = express.Router();


router.get('/', getVisits);

router.get('/:name',getVisitsBySpec);
router.put('/:lekarz/:dzien/:godzina',reserveVisit);

export default router;