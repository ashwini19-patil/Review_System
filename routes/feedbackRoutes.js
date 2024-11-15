

import { createAdmin, createAlumni, createStudent, getAllUsers  } from "../controllers/userController.js";
import { createCompany, getCompanies } from "../controllers/companyCcontroller.js";
import { createReview, getAllReviews } from "../controllers/reviewController.js";
import { likeReviews } from "../controllers/likeController.js";
import { isAdmin } from "../Middleware/middleWare.js";

import express from "express";

 const router=express.Router();

router.post("/admin/create", createAdmin); // Admin creation
router.post("/alumni/create", createAlumni); // Alumni creation
router.post("/student/create", createStudent);
router.post("/company/create", isAdmin,createCompany);
router.post("/review/create",createReview);
router.post("/like/add",likeReviews)
router.get("/user/get",getAllUsers);
router.get("/company/get",getCompanies);
router.get("/review/get",getAllReviews);


export default router;