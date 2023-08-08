var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/user/:sys_id', function (req, res, next) {
    var sys01 = 1234654564865416587865416857;
    if (req.params.sys_id == sys01) {
        res.json({
            name: "Yan",
            roles: ["admin", "sup"]
        });
    } else if (req.params.sys_id == "Guesa") {
        res.json({
            name: "Guesa",
            roles: ["admin", "Mestre"]
        })
    } else { 
        res.json({
            name: "Thiagão",
            roles: ["user"]
        })
    };
});

/* GET home page. */
router.get('/grupo/:sys_id', function (req, res, next) {
    res.send("retornando as roles.")
});

module.exports = router;