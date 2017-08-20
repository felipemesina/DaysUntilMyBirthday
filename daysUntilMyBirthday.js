var daysUntilMyBirthday = 60;

while(daysUntilMyBirthday>=0){
  if (daysUntilMyBirthday>=31){
  console.log(daysUntilMyBirthday);
  console.log("...so far away!");
  daysUntilMyBirthday--;}
  
  else if (daysUntilMyBirthday<=31 && daysUntilMyBirthday>4){
  console.log(daysUntilMyBirthday);
  console.log("...getting closer!");
  daysUntilMyBirthday--;
}
    else if (daysUntilMyBirthday<=4 && daysUntilMyBirthday>0){
  console.log(daysUntilMyBirthday);
  console.log("...AHH " + daysUntilMyBirthday + " days until my BDAY!" );
  daysUntilMyBirthday--;
}
  else if (daysUntilMyBirthday===0){
  console.log(daysUntilMyBirthday);
  console.log("ITS MY FRICKIN BIRTHDAY!!!" );
  daysUntilMyBirthday--;
}
}