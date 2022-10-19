
// by aman nadeem 10/5/2022
// QUESTION NO 16

greet = "Its my honour to meet ";
few_wishes = ['TANVEER SAHAB','ABU','SHIEKH ATIF'];

hall = 'we booked grand hall for ulama';
console.log(hall);

few_wishes.unshift('Shiekh Noman ALI khan');
few_wishes.splice(2,0,'SOHAIB');
few_wishes.push('saqi sahab')

        for (let i in few_wishes) {
            
            console.log(greet+'at ulama conference '+few_wishes[i]);
        }
// QUESTION NO 17
console.log(`There's only two main ulama to get invitations`);

pat = 'sabar ';
// const removeRandom = (array) => {
    while(few_wishes.length-2){
       const random = Math.floor(Math.random(few_wishes.length) * few_wishes.length);
       const el = few_wishes.splice(random, 1)[0];
       console.log(pat+el);
    }
//  };
//  removeRandom(few_wishes);
 console.log(`there are finalist ${few_wishes}`);
 few_wishes.length = 0;
 few_wishes.splice(0,few_wishes.length);
 console.log(`List is EMPTY ${few_wishes}`);
