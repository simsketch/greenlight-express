const Vendor = require('../../models/Vendor');

module.exports = (app) => {
  app.get('/api/vendors', (req, res, next) => {
    Vendor.find()
      .exec()
      .then((vendor) => res.json(vendor))
      .catch((err) => next(err));
  });

  app.get('/api/vendors/:email', (req, res, next) => {
    Vendor.findOne({ email: req.params.email })
      .exec()
      .then((vendor) => res.json(vendor))
      .catch((err) => next(err));
  });

  app.post('/api/vendors', function (req, res, next) {
    const vendor = new Vendor(req.body);
    console.log(req.body);
    console.log(vendor);
    vendor.save()
      .then((vendor) => res.json(vendor))
    //   .then(item => res.send("item saved to database"))
      .catch((err) => next(err));
  });

  app.delete('/api/vendors/:id', function (req, res, next) {
    Vendor.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((vendor) => res.json())
      .catch((err) => next(err));
  });

  app.put('/api/vendors/:id/update/:capacity', (req, res, next) => {
    Vendor.findById(req.params.id)
      .exec()
      .then((vendor) => {
        vendor.capacity = req.params.capacity;
        vendor.save()
          .then(() => res.json(vendor))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });

  app.put('/api/vendors/:id/updateEmail/:email', (req, res, next) => {
    Vendor.findById(req.params.id)
      .exec()
      .then((vendor) => {
        vendor.email = req.params.email;
        vendor.save()
          .then(() => res.json(vendor))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });

//   app.put('/api/vendors/:id/increment', (req, res, next) => {
//     Vendor.findById(req.params.id)
//       .exec()
//       .then((vendor) => {
//         vendor.count++;

//         vendor.save()
//           .then(() => res.json(vendor))
//           .catch((err) => next(err));
//       })
//       .catch((err) => next(err));
//   });

//   app.put('/api/vendors/:id/decrement', (req, res, next) => {
//     Vendor.findById(req.params.id)
//       .exec()
//       .then((vendor) => {
//         vendor.count--;

//         vendor.save()
//           .then(() => res.json(vendor))
//           .catch((err) => next(err));
//       })
//       .catch((err) => next(err));
//   });
};
