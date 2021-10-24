import Menu from "../../Component/Menu";
function PageForyou(){
    return(
        <>  
            <h1>Abum ne</h1>
        </>
    )
}
function Foryou() {
    return (
        <>
            <Menu component={<PageForyou />}></Menu>
        </>
    )
}
export default Foryou;