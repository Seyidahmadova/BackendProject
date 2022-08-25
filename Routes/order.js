import express from "express";
const router = express.Router();
const app = express();
import orderdb from "../Models/order.js";

router.get("/order", (req, res) => {
  const data = orderdb.find({});
  res.send(data);
});
router.post("/order", async (req, res) => {
  const { customer_id, product_id,total,createdAt, long, lat } = req.body;
  const m = new orderdb({
    customer_id,
    product_id,
    total,
    createdAt,
    location: {
      long,
      lat,
    },
  });
  m.save();
  res.end("ok");
});
router.get("/order/:id", (req, res) => {
  const data = orderdb.findById({ id: req.params.id });
  res.send(data);
});
router.delete("/order/:id", (req, res) => {
  const data = orderdb.findByIdAndUpdate(req.params.id, { IsDeactive: true });
  res.send(data);
});
router.put("/order/:id", (req, res) => {
  const data = orderdb.findByIdAndUpdate(
    {
      id: req.params.id,
    },
    req.body
  );
  res.send(data);
});
export default router;
