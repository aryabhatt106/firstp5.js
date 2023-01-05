function preload() {
}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position(350,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw(){
    fill('#ff7ccd');
    stroke('#310229');
    rect(60,40,500,15);
    rect(60,425,500,15);
    rect(45,40,15,400);
    rect(585,40,15,400);
    tint(tint_color);

    fill('#ff7ccd');
    stroke('#310229');
    circle(50,50,80);
    circle(590,50,80);
    circle(50,430,80);
    circle(590,430,80);
    image(video,160,120,300,250);
    tint(tint_color);
}

function apply_filter() {
    tint_color = document.getElementById("tint_input").value;
}

function take_snapshot() {
    save('student_name.png');
}