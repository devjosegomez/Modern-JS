/*
    Grade calculator 2020 Covid Special Edition
*/

let getGrade = ( studentScore, maxScore ) => 
{
    let grade;
    let result = (studentScore / maxScore) * 100
    
    //A+: 97-100, A:  93-96, A-: 90-92
    if ( result >= 97)  grade = 'A+'
    else if ( result >= 93 )    grade = 'A'
    else if ( result >= 90 )    grade = 'A-'
    //B+: 87-89 , B:  83-86, B-: 80-82
    else if ( result >= 87 )    grade = 'B+'
    else if ( result >= 83 )    grade = 'B'
    else if ( result >= 80 )    grade = 'B-'
    //C+: 77-79, C:  73-76, C-: 70-72
    else if ( result >= 77 )    grade = 'C+'
    else if ( result >= 73 )    grade = 'C'
    else if ( result >= 70 )    grade = 'C-'
    //D+: 67-69, D:  63-66, D-: 60-62
    else if ( result >= 67 )    grade = 'D+'
    else if ( result >= 63 )    grade = 'D'
    else if ( result >= 60 )    grade = 'D-'
    //F:  Below 60
    else    grade = 'F'

    return `${ result } = ${ grade }`
}

console.log ( getGrade ( 19, 20 ) )
console.log ( getGrade ( 17, 20 ) )
console.log ( getGrade ( 9, 20 ) )