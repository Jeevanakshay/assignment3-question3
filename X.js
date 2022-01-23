export default function X(Props){
    
    function sums(){
        var a=parseInt(Props.a)
        var b=parseInt(Props.b)
        
        return(a+b);
    }
    return(
        <p> sum is {Props.a}+{Props.b}is {sums()}</p>
    );
    } 
