function submit(){
    let Namabuku = inputdata("inputbuku")
    let Namapenulis = inputdata("inputpenulis")
    showdata("Namabuku",Namabuku)
    showdata("Namapenulis",Namapenulis)
    
}
function inputdata(id){
    let inputdata = document.getElementById(id).value
    return inputdata
}
function showdata(id,isi){
    let showdata = document.getElementById(id).innerHTML = id+' : '+isi;

}