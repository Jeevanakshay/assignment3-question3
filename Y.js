export default function Y(Props){
    
    function sums(){
        var a=parseInt(Props.a)
        var b=parseInt(Props.b)
        var c=parseInt(Props.c)
        return(a+b+c);
    }
    
    
    
    return(
        <p>sum is {Props.a}+{Props.b}+{Props.c} is {sums()}</p>
    );
}
