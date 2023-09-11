const express = require('express');

const {
    getAllMsgs,
    createNewMsg,
    updateMsg,
    deleteMsg,
} = require('../')