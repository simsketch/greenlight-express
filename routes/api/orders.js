const Order = require('../../models/Order');

module.exports = (app) => {
  app.get('/api/orders', (req, res, next) => {
    Order.find()
      .exec()
      .then((order) => res.json(order))
      .catch((err) => next(err));
  });

  app.get('/api/orders/:vendorId', (req, res, next) => {
    // Order.find({ vendorId: {$in: [req.params.id] }})
    Order.find({ vendorId: req.params.vendorId })
      .exec()
      .then((order) => res.json(order))
      .catch((err) => next(err));
  });

  app.post('/api/orders', function (req, res, next) {
    const order = new Order(req.body);
    // console.log(req.body);
    // console.log(order);
    order.save()
      .then((order) => res.json(order))
    //   .then(item => res.send("item saved to database"))
      .catch((err) => next(err));
  });

  app.delete('/api/orders/:id', function (req, res, next) {
    Order.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((order) => res.json())
      .catch((err) => next(err));
  });

  // app.put('/api/orders/:id/update/:capacity', (req, res, next) => {
  //   Order.findById(req.params.id)
  //     .exec()
  //     .then((order) => {
  //       order.capacity = req.params.capacity;
  //       order.save()
  //         .then(() => res.json(order))
  //         .catch((err) => next(err));
  //     })
  //     .catch((err) => next(err));
  // });

//   app.put('/api/orders/:id/increment', (req, res, next) => {
//     Order.findById(req.params.id)
//       .exec()
//       .then((order) => {
//         order.count++;

//         order.save()
//           .then(() => res.json(order))
//           .catch((err) => next(err));
//       })
//       .catch((err) => next(err));
//   });

//   app.put('/api/orders/:id/decrement', (req, res, next) => {
//     Order.findById(req.params.id)
//       .exec()
//       .then((order) => {
//         order.count--;

//         order.save()
//           .then(() => res.json(order))
//           .catch((err) => next(err));
//       })
//       .catch((err) => next(err));
//   });
};
