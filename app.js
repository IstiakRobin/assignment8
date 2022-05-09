


fiftclass_std.forEach((data)=>
{

    let totalcg = getcgpa(data.bn) + getcgpa(data.en) + getcgpa(data.math) + getcgpa(data.sci) + getcgpa(data.ssci) + getcgpa(data.reli);
    let avaragecgpa =    totalcg /6;

    console.log(`
    Name:  ${data.name}
    Roll:  ${data.roll}
    Class: ${data.class}
    -------------------------------------------------------------------------------------
    subject name    Subject marks               Gpa                 Grade           Cgpa
    Bangla          ${data.bn}                          ${getgpa(data.bn)}                   ${getgrade(data.bn)}               ${getcgpa(data.bn)}   
    english         ${data.en}                          ${getgpa(data.en)}                 ${getgrade(data.en)}                 ${getcgpa(data.en)}                  
    Mathmatics      ${data.math}                          ${getgpa(data.math)}                   ${getgrade(data.math)}         ${getcgpa(data.math)} 
    Science         ${data.sci}                          ${getgpa(data.sci)}                   ${getgrade(data.sci)}            ${getcgpa(data.sci)} 
    social Science  ${data.ssci}                          ${getgpa(data.ssci)}                   ${getgrade(data.ssci)}         ${getcgpa(data.ssci)} 
    Religion        ${data.reli}                          ${getgpa(data.reli)}                 ${getgrade(data.reli)}           ${getcgpa(data.reli)} 
    --------------------------------------------------------------------------------------
    total marks:    ${data.bn+data.en+data.math+ data.sci+data.ssci+data.reli}                                                          ${avaragecgpa.toFixed(2)}
    `);
}
)