const db = require('../lib/db.js');

exports.signin = function(signinReq, signinRes){
    const post = signinReq;
    db.query(`SELECT email, password FROM user where email = ?`, [post.email],
    function(existErr, existRes){
        if(existErr) { throw (existErr); }
        if(existRes.length == 1) {
            if(post.password === existRes[0].password) {  signinRes.json({return : 'success'});}
            else { signinRes.json({return : 'diffPassword'}); }
        }
        else { signinRes.json({return : 'nonexistentEmail'}) }
    })
}

exports.signup = function(singupReq, signupRes){
    const post = singupReq;
    db.query(`SELECT * FROM user WHERE Email = ?`, [post.email],
    function(dupliErr, dupliRes){
        if(dupliErr) { throw dupliErr; }
        if (dupliRes.length == 0) {
            db.query(`INSERT INTO user VALUES (?, ?, ?, ?, ?, ?)`,
            [post.userName, post.email, post.password, post.gender, post.univ, post.dept],
            function(err, res){
                if(err) { console.log(err); }
                else { signupRes.json({return:'success'}); }
            })
        }
        else { signupRes.json({return:'emailDuplicate'}); }
    })
}

exports.getData = function(getDataReq, getDataRes, callback) {
    db.query(`SELECT * FROM board`,
    function(getSuccessErr, getSuccessRes){
        callback({data: getSuccessRes});
    });
}