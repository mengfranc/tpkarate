var photos=new Array()
var which=0

photos[0]="photos/image01.jpg"
photos[1]="photos/image02.jpg"
photos[2]="photos/image03.jpg"
photos[3]="photos/image04.jpg"
photos[4]="photos/image05.jpg"
photos[5]="photos/image06.jpg"
photos[6]="photos/image07.jpg"
photos[7]="photos/image08.jpg"
photos[8]="photos/image09.jpg"
photos[9]="photos/image10.jpg"
photos[10]="photos/image11.jpg"
photos[11]="photos/image12.jpg"
photos[12]="photos/image13.jpg"
photos[13]="photos/image14.jpg"
photos[14]="photos/image15.jpg"
photos[15]="photos/image16.jpg"

function backward(){
    if (which>0){
        which--
        document.images.photoslider.src=photos[which]
    }
}

function forward(){
    if (which<photos.length-1){
        which++
        document.images.photoslider.src=photos[which]
    }
}

var photos2=new Array("photos/image01.jpg","photos/image02.jpg","photos/image03.jpg","photos/image04.jpg","photos/image05.jpg","photos/image06.jpg","photos/image07.jpg","photos/image08.jpg","photos/image09.jpg","photos/image10.jpg","photos/image11.jpg","photos/image12.jpg","photos/image13.jpg","photos/image14.jpg","photos/image15.jpg","photos/image16.jpg");
var now=null;

function slide(p){
    document.images.photoslider.src=photos2[p.id];
    if (now != null) now.style.background="#FFFFFF";
    now=p;
    p.style.background="#275468";
}
IE=document.all;
function track(e){
    cm=IE ? document.all("men") : document.getElementById("men");
    cm.style.top=IE ? event.clientY : e.clientY;
    cm.style.left=IE ? event.clientX : e.clientX;
    cm.style.display="block";
    return false;
}
document.oncontextmenu=track;/**
 * Created by ccrespoh on 2015-03-23.
 */
