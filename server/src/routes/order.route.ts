import express from 'express';

import { createOrder, deleteOrderById, getAllOrders, getOrderById, updateOrderById } from '../controllers/order.controller';

import { isAuthenticated } from '../middlewares';

export default(router:express.Router) =>{
    router.post('/orders',isAuthenticated,createOrder);
    router.get('/orders',isAuthenticated,getAllOrders);
    router.get('/orders/:id',isAuthenticated,getOrderById);
    router.delete('/orders/:id',isAuthenticated,deleteOrderById);
    router.put('/orders/:id',isAuthenticated,updateOrderById);
}