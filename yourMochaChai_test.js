describe('MyUserFunctions', () => {
    describe(`#sortUsers`, () => {
        it('Should actually sort them', () => {
            var x = sortUsers(users);
            expect(users[2].id).to.equal(3);
        });

        it('Should throw an error if it receives anything except an array of users ', () => {
            expect(function () {
                sortUsers("Tacos");
            }).to.throw(Error);
        });
    });

});

//************FEEL FREE TO USE THIS AS A MODEL 1032 ******//
