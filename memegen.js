function setup(){
    noCanvas();
    let r = floor(random(15));
    let img = createImg('memes/meme'+r+'.jpg');
    newwidth = windowHeight*0.8;
    newheight = windowHeight*0.8;
    img.size(newwidth, newheight);
    img.center('horizontal');
}



