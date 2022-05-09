const getgpa = (marks) => 
{

    let gpa;

    if (marks<33)
    {
        gpa= 0;
    }
    else if (marks>33 && marks<40)
    {
        gpa= 1;
    }
    else if (marks>40 && marks<50)
    {
        gpa= 2;
    }
    else if (marks>50 && marks<60)
    {
        gpa= 3;
    }
    else if (marks>60 && marks<70)
    {
        gpa= 3.5;
    }
    else if (marks >70 && marks <80)
    {
        gpa = 4;
    }
    else if (marks >80 && marks <=100)
    {
        gpa = 5;
    }
    else {
        gpa = 'invalid'
    }

    return gpa;

}
const getgrade = (marks) => 
{

    let grade;

    if (marks<33)
    {
        grade= 'F';
    }
    else if (marks>33 && marks<40)
    {
        grade= 'D';
    }
    else if (marks>40 && marks<50)
    {
        grade= 'C';
    }
    else if (marks>50 && marks<60)
    {
        grade= 'B';
    }
    else if (marks>60 && marks<70)
    {
        grade= 'A-';
    }
    else if (marks >70 && marks <80)
    {
        grade = 'A';
    }
    else if (marks >80 && marks <=100)
    {
        grade = 'A+';
    }
    else {
        grade = 'invalid'
    }

    return grade;

}
const getcgpa = (marks) => 
{

    let cgpa;

    if (marks<33)
    {
        cgpa= 0.00;
    }
    else if (marks>33 && marks<40)
    {
        cgpa= 2.00;
    }
    else if (marks>40 && marks<50)
    {
        cgpa= 2.50;
    }
    else if (marks>50 && marks<60)
    {
        cgpa= 3.00;
    }
    else if (marks>60 && marks<70)
    {
        cgpa= 3.50;
    }
    else if (marks >70 && marks <80)
    {
        cgpa = 3.75;
    }
    else if (marks >80 && marks <=100)
    {
        cgpa = 4;
    }
    else {
        cgpa = 'invalid'
    }

    return cgpa;

}