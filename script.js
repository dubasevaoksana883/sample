function PictureConstr(url, name){
 this.elem=document.createElement("img")
 this.elem.src=url
 this.elem.style.width="200px"
  
 document.body.appendChild(this.elem)

this.elem.style.transition="all 0.5s"

this.elem.onmouseover=function(event){
 this.style.width="400px"
}

this.elem.onmouseout=function(event){
 this.style.width="200px"
}
}
var pictures=[
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-ra1tyHqkZX1kVmd-Ii2tCVEiMWNpf68G29HKL5FbTHsiiby",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiP_KbH2I-Xf_b00ZW3Vc7wP22SiiFIbS29A3fGbAf3elLwuT1",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgzNdiW77K_T8HGAZiMbbCkFwpSt9pkHUnH8olmARyzCMmcWAs"
]
var elems=[]
for (var pic of pictures){
 var x=new PictureConstr(pic)
 elems.push(x)
}