const express=require('express');
const router = express.Router();
const { createResidency, getAllResidencies, getResidency } =require( '../controllers/residencyController');
const {auth}=require("../middleware/auth")
router.post("/create",auth,createResidency)
router.get("/allres",getAllResidencies )
router.get("/res/:id",getResidency )


module.exports = router  