import express from 'express';
import {
    createMission,
    startMission,
    handleMissionSuccessRequest,
    handleMissionSuccessConfirm
} from "../controllers/mission.controller.js";
import { isLogin } from '../auth.middleware.js';

const router = express.Router();

router.post("/",isLogin, createMission);
router.post("/:missionId/challenges",isLogin,startMission);


router.get("/:missionId/request",isLogin, handleMissionSuccessRequest);
router.get("/:missionId/confirm",isLogin, handleMissionSuccessConfirm);

export default router;