//Question 1
const q1 = document.getElementById('1a');
const luffyBirthday = dayjs('1999-05-05').format('MMM D, YYYY');
q1.innerHTML = `<p> Luffy's Birthday is on ${luffyBirthday}. </p>`

//Question 2
const q2 = document.getElementById('2a');
const futureDate = (dayjs('2026-07-23'));
const onePieceDay26 = futureDate.format('dddd');
q2.innerHTML = `<p> ONE PIECE Day 2026 falls on a ${onePieceDay26}. </p>`

//Question 3
const q3 = document.getElementById('3a');
const vol1000Timestamp = dayjs.unix(1693833600).format('MMMM D, YYYY h:m:ss')
q3.innerHTML = `<p> Volume 1000 of ONE PIECE Day was released on ${vol1000Timestamp}. </p>`

//Question 4
const q4 = document.getElementById('4a');
const pastDate = dayjs('2022-03-26');
const gear5Day = dayjs().diff(pastDate, 'day');
q4.innerHTML = `<p> Luffy's Fifth Gear form debuted ${gear5Day} days ago. </p>`

