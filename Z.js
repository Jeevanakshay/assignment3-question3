export default function Z({a1,b1,c1,d1}){
    function sums(){
        var a1=10;
        var b1=2;
        var c1=3;
        var d1=4;
        return(a1+b1+c1+d1);

    }

     return(
         <p>sums is {a1}+{b1}+{c1}+{d1} is {sums()}</p>
     );
}
