
// by aman nadeem 10/5/2022
// QUESTION NO 14
greet = "Its my honour to stay with you, ";
few_wishes = ['TANVEER SAHAB','ABU','SHIEKH ATIF'];
        

        for (let i in few_wishes) {
            console.log(greet+few_wishes[i]);
        }
// QUESTION NO 15
console.log(`${few_wishes[2]} is at as safwa`);
few_wishes[2] = 'AFTAB';
for (let i in few_wishes) {
    console.log(greet+few_wishes[i]);
}