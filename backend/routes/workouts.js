const express = require('express')
const {
    getWorkouts, 
    getWorkout,
    createWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

//Get a single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//Delete a new workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a workout'})
})

//UPDATE a new workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})


module.exports = router