const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Saving records', function(){
    
    // Create tests
    it('Saves a record to the database', function(){
        
        var char = new MarioChar({
            name: 'Mario'
        });
       
       char.save().then(function(done){
           assert(char.isNew === false);
           done();
       });
        
    });
    
});

