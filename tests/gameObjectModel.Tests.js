var ObjectsModel = require('../src/scripts/gameObjectsModel.js')();
var expect = require('chai').expect;


describe('Test for objects in the game.', function () {
    describe('Enemy tests.', function () {
        var CONSTS = {
                VALID: {
                    position: {x:26, y:206},
                    size: {width:400, height:400},
                    image: function(){
                        var img = new Image();
                        img.src = 'images/ivaylo_defalt.jpg';
                        return img;
                    },
                    speed: 4,
                    direction: {x:0, y:-1},
                    isTarget: true,
                    zIndex: 1
                },
                INVALID: {
                    position: {x:-15, y:-13},
                    image:  function(){
                        var img = new Image();
                        img.src = 'images/ifchouu.png';
                        return img;
                    },
                    speed: true,
                    size: {width:-20, height:700},
                    direction: {x:5, y:-1},
                    isTarget: 'true',
                    zIndex: 'hit you'
                }
            }

        it('expect enemy to be an object', function () {
            expect(ObjectsModel.enemy).to.be.a('function');
        }),

        it('expect enemy to throw position error', function () {
            function positionError () {
                Object.create(ObjectsModel.enemy).init(CONSTS.INVALID.position, 
                    CONSTS.VALID.size, 
                    CONSTS.VALID.image,
                    CONSTS.VALID.speed,
                    CONSTS.VALID.direction,
                    CONSTS.VALID.zIndex,
                    CONSTS.VALID.isTarget);
            }
            expect(positionError).to.throw();
        }),
        
        it('expect enemy to throw size error', function () {
            function sizeError () {
                Object.create(ObjectsModel.enemy).init(CONSTS.VALID.position, 
                    CONSTS.INVALID.size, 
                    CONSTS.VALID.image,
                    CONSTS.VALID.speed,
                    CONSTS.VALID.direction,
                    CONSTS.VALID.zIndex,
                    CONSTS.VALID.isTarget);
            }
            expect(sizeError).to.throw()
        })
    });
});
        



        