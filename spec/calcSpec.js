// describe('Calculator', function(){
//     describe('Addition tests', function(){
//         it('should return 42', function(){
//             expect(addition(20, 22)).toBe(42);
//         })
//         it('should return 26', function(){
//             expect(addition(7, 19)).toBe(26);
//         })
//         it("should return an error if we don't supply two numbers", function(){
//             // First Argument: the object that the function we're spying on belongs to.
//             // Second Argument: a STRING with the name of the function, in this case, alert.
//             spyOn(window, "alert");
//             addition("Hitchhikers", "Guide");
//             // toHaveBeenCalledWith allows us to pass through a parameter and to check if that parameter
//             // is the one that the function has been called with.
//             expect(window.alert).toHaveBeenCalledWith("Error!");
//         });
//     });
// });

//Changing test after change on calc.js

//Create a new instance of the calculator object.
describe('Calculator', function(){

    //to stop the value being carried from one test to the next, we call the beforeEach() function
    beforeEach(function(){
        calc = new Calculator
    })

    describe('Addition tests', function(){
        it('should return 42', function(){
            //because the Calculator object takes one number at a time, we'll need to call it twice
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        })
        it('should return 26', function(){
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        })
        it("should return an error if we don't supply two numbers", function(){
            // First Argument: the object that the function we're spying on belongs to.
            // Second Argument: a STRING with the name of the function, in this case, alert.
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            // toHaveBeenCalledWith allows us to pass through a parameter and to check if that parameter
            // is the one that the function has been called with.
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});