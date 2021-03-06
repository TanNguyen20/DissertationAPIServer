const express = require('express');
const router = express.Router();
const verifyToken = require('../app/middleware/auth');
const checkAdmin = require('../app/middleware/checkAdmin');
const AdminControllers = require('../app/controllers/AdminControllers');

//employees
router.post('/createEmployeeAccount', verifyToken, checkAdmin, AdminControllers.CreateEmployeeAccount);
router.post('/login', AdminControllers.login);
router.post('/checkAdmin', verifyToken, checkAdmin, AdminControllers.CheckAdmin);
router.get('/getAllEmployee', AdminControllers.GetAllEmployee);
router.get('/getEmployee/:id', verifyToken, checkAdmin, AdminControllers.GetEmployee);
router.delete('/deleteEmployee/:id', verifyToken, checkAdmin, AdminControllers.DeleteEmployee);
router.patch('/updateInfoEmployee/:id', verifyToken, checkAdmin, AdminControllers.UpdateInfoEmployee);
//products
router.post('/addNewProduct', verifyToken, checkAdmin, AdminControllers.AddNewProduct);
router.get('/getAllProduct', verifyToken, checkAdmin, AdminControllers.GetAllProduct);
router.get('/getProductById/:id', verifyToken, checkAdmin, AdminControllers.GetProductById);
router.patch('/updateProduct/:id', verifyToken, checkAdmin, AdminControllers.UpdateProduct);
router.delete('/deleteProduct/:id', verifyToken, checkAdmin, AdminControllers.DeleteProduct);
//stores
router.post('/createStore', verifyToken, checkAdmin, AdminControllers.CreateStore);
router.get('/getAllStore', AdminControllers.GetAllStore);
router.patch('/updateStore/:id', verifyToken, checkAdmin, AdminControllers.UpdateStore);
router.delete('/deleteStore/:id', verifyToken, checkAdmin, AdminControllers.DeleteStore);
//statistical
router.get('/statistical', verifyToken, checkAdmin, AdminControllers.Statistical);
router.get('/statisticalLast7days', verifyToken, checkAdmin, AdminControllers.StatisticalLast7Days);
//order
router.get('/getAllOrder', verifyToken, checkAdmin, AdminControllers.GetAllOrder);
router.patch('/confirmOrder/:id', verifyToken, checkAdmin, AdminControllers.ConfirmOrder);
router.patch('/cancelOrder/:id',verifyToken,checkAdmin, AdminControllers.CancelOrder);
router.patch('/updateOrder/:id',verifyToken,checkAdmin, AdminControllers.UpdateOrder);
router.patch('/setEmployeeForOrder/:id',verifyToken,checkAdmin, AdminControllers.SetEmployee);
//discount
router.post('/createDiscount', verifyToken, checkAdmin, AdminControllers.CreateDiscount);
router.get('/getAllDiscount', verifyToken, checkAdmin, AdminControllers.GetAllDiscount);
router.patch('/updateDiscount/:id', verifyToken, checkAdmin, AdminControllers.UpdateDiscount);
router.delete('/deleteDiscount/:id', verifyToken, checkAdmin, AdminControllers.DeleteDiscount);
//notification
router.post('/createNotification', AdminControllers.CreateNotification);
router.get('/getAllNotification', verifyToken, checkAdmin, AdminControllers.GetAllNotification);
router.get('/getNotificationByOrderId/:idOrder', verifyToken, checkAdmin, AdminControllers.GetNotificationByOrderId);

module.exports = router;