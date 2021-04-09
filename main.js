var images=[
    "https://cdn5.vectorstock.com/i/1000x1000/44/44/indian-father-and-son-vector-1444444.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPej7_t3cWG9JpJbCEDPh9bhUKwp5khETzrkvIVUG0Jc9P6HullTpw1n1JowbGy6arIc&usqp=CAU",
    "https://image.shutterstock.com/image-vector/two-hand-drawn-beautiful-cute-260nw-759255565.jpg",
    "https://png.pngtree.com/png-clipart/20190508/ourlarge/pngtree-cartoon-grandma-with-crutches-png-image_885493.jpg",
    "https://image.shutterstock.com/image-vector/cute-grandfather-cartoon-260nw-726215185.jpg",
    "https://i.pinimg.com/originals/86/06/eb/8606ebc36513c5afb20d2c96d397ee2f.jpg",
    "https://image.shutterstock.com/image-vector/standing-kids-icon-260nw-635983619.jpg"
    ];
    
    var i=0
    function nextslide() {
    if (i == 7)
    {
    i=0;
    }
    document.getElementById("album").src=images[i];
    i++;
    }
    
    