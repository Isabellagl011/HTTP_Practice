const express = require('express');
const PersonService = require('../services/person.service');
const personModel = require('../models/personModel');
const personRouter = express.Router();
const service = new PersonService();

//EndPoints
personRouter.post('/person', async (req, res) => {
  const person = personModel(req.body);
  await service
    .createperson(person)
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

personRouter.get('/', async (req, res) => {
  await service
    .listperson()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

personRouter.get('/:personId', async (req, res) => {
  const { personId } = req.params;
  await service
    .showperson(personId)
    .then((data) => res.status(302).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

personRouter.put('/:personId', async (req, res) => {
  const { personId } = req.params;
  const {
    id,
    name,
    username,
    address = { geo: { lang, lat }, city, code_zip },
    phone,
  } = req.body;
  await service
    .editperson(personId, id, name, username, address, phone)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(304).json({ message: err }));
});

personRouter.delete('/:personId', async (req, res) => {
  const { personId } = req.params;
  await service
    .removeperson(personId)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

module.exports = personRouter;
