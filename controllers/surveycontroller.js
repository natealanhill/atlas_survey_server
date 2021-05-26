const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validate-session');
const Survey = require('../db').import('../models/survey');

router.get('/practice', validateSession, function(req,res){
    res.send('this is a practice route')
})

router.post('/create', validateSession, (req,res) => {
    const surveyEntry = {
        Question: req.body.survey.question,
        choice1: req.body.survey.choice1,
        choice2: req.body.survey.choice2,
        choice3: req.body.survey.choice3,
        choice4: req.body.survey.choice4,
        choice5: req.body.survey.choice5,
        choice6: req.body.survey.choice6,
    }
    Survey.create(surveyEntry)
        .then(survey => res.status(200).json(survey))
        .catch(err => res.status(500).json({ error: err }))
});


//GET ALL ENTRIES
router.get("/", (req,res) => {
    Survey.findAll()
    .then(surveys => res.status(200).json(surveys))
    .catch(err => res.status(500).json({error: err}))
});

//GET ENTRIES BY USER
// router.get("/mine", validateSession, (req, res) => {
//     let userid = req.user.id
//     Log.findAll({
//         where: { owner: userid}
//     })
//     .then(logs => res.status(200).json(logs))
//     .catch(err => res.status(500).json({ error: err}))
// });

router.put("/update/:entryId", validateSession, function (req,res) {
    const updateSurveyEntry = {
        Question: req.body.survey.question,
        choice1: req.body.survey.choice1,
        choice2: req.body.survey.choice2,
        choice3: req.body.survey.choice3,
        choice4: req.body.survey.choice4,
        choice5: req.body.survey.choice5,
        choice6: req.body.survey.choice6,
    };

    const query = { where: {id:req.params.entryId } };

    Survey.update(updateSurveyEntry, query)
    .then((surveys) => res.status(200).json(surveys))
    .catch((err) => res.status(500).json( { error: err } ));
});

router.delete("/delete/:id", validateSession, function(req, res) {
    const query = { where: { id: req.params.id } };

    Survey.destroy(query)
    .then(() => res.status(200).json({ message: "Survey Removed"}))
    .catch((err) => res.status(500).json({error:err}));
})

module.exports = router;