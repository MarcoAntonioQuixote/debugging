var expect = chai.expect;

// NOTHING ON THIS PAGE IS BROKEN, DO NOT TOUCH! 👉🏽🛑
/* * Do not uncoment this.
    const WW = {
        name: 'Wonder Woman',
        score: 820,
        credit: {
            amex: 1000,
        }
    }

    const SM = {
        name: 'Superman',
        credit: {}
    }

    const BM = {
        name: 'Batman',
        score: 530,
        credit: {
            gothamEx: 9999999992
        }
    }
*/

describe('Updating Credit for users WITH credit', function() {
    describe("For those who are qualified (Score 600+)", function () {
        it('should return a user with a new card and new amount', function () {
            const updatedUser = applyForCredit(WW,"MexExpress",500);
            expect(updatedUser.credit.MexExpress).to.equal(500);
        });

        it('should return a user with an updated card amount', function () {
            const updatedUser = applyForCredit(WW,"AmEx",500);
            expect(updatedUser.credit.AmEx).to.equal(500);
        });

        it('should throw an error if user comes with no new info to update', function() {
            expect(() => {
                applyForCredit(WW);
            }).to.throw(Error);
        })
    });

    describe("For those who are not qualified (below 600)", () => {
        it('should return back gently that the user is not qualified', () => {
            expect(() => {
                applyForCredit(BM,"AmEx",100000000);
            }).to.throw(Error);
        })
    })
})

describe('Updating Credit for Users WITHOUT credit', function() {
    it('should throw an error when user with no credit is submitted', function () {
        expect(function () {
            applyForCredit(SM)
        }).to.throw(Error);
    })
})
