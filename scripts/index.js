
  // Initialize Firebase
  var config = {
    apiKey: "./myKey.json",
    authDomain: "takeouttonight-a60b0.firebaseapp.com",
    databaseURL: "https://takeouttonight-a60b0.firebaseio.com",
    projectId: "takeouttonight-a60b0",
    storageBucket: "takeouttonight-a60b0.appspot.com",
    messagingSenderId: "78398501206"
  };
  firebase.initializeApp(config);

var dbRefItem = firebase.database().ref().child('items');

//display item-1
var dbRefItemOne = dbRefItem.child('item-1');
  dbRefItemOne.on('value', snap => {
    dbRefItemOne = snap.val();
    $('#item-1').html(dbRefItemOne.name);
    $('#item-1-description').html(dbRefItemOne.description);
    $('#item-1-price').html("$" + dbRefItemOne.price);
  });

//display item-2
var dbRefItemTwo = dbRefItem.child('item-2');
  dbRefItemTwo.on('value', snap =>{
    dbRefItemTwo = snap.val();
    $('#item-2').html(dbRefItemTwo.name);
    $('#item-2-description').html(dbRefItemTwo.description);
    $('#item-2-price').html("$" + dbRefItemTwo.price);
});
//display item-3
var dbRefItemThree = dbRefItem.child('item-3');
  dbRefItemThree.on('value', snap =>{
    dbRefItemThree = snap.val();
    $('#item-3').html(dbRefItemThree.name);
    $('#item-3-description').html(dbRefItemThree.description);
    $('#item-3-price').html("$" + dbRefItemThree.price);
});
//display item-4
var dbRefItemFour = dbRefItem.child('item-4');
  dbRefItemFour.on('value', snap =>{
    dbRefItemFour = snap.val();
    $('#item-4').html(dbRefItemFour.name);
    $('#item-4-description').html(dbRefItemFour.description);
    $('#item-4-price').html("$" + dbRefItemFour.price);
});


//display most recent order
var dbRefOrder = firebase.database().ref('user orders');
dbRefOrder.limitToLast(1).on("child_added", function(childSnapshot) {
       dbRefOrder = childSnapshot.val();
       var total = 0;
       var getSelection = dbRefOrder.order.selection;

       for (var i=0; i<getSelection.length; i++){
           total += parseInt(getSelection[i].slice(1));
       }

       var orderTime = new Date(dbRefOrder.order.timestamp);
       var formatedOrderTime = orderTime.toJSON();
        $('#order-name').html("<b>Name: </b>" + dbRefOrder.order.name);
        $('#order-email').html("<b>Email: </b>" + dbRefOrder.order.email);
        $('#order-selection').html("<b>Dinner(s) Selected: </b>" + dbRefOrder.order.selection.join(", "));
        $('#order-date').html("<b>Date(s) Selected: </b>" + dbRefOrder.order.date.join(", "));
        $('#order-total').html("<b>Total is: </b>" + "$" + total);
        $('#order-message').html("<b>Message: </b>" + dbRefOrder.order.message);
        $('#order-time').html("<b>Date Ordered: </b>" + formatedOrderTime); 
    });
//update item one
function updateItemOne(){
  var ref = firebase.database().ref().child('items');
  var refItemOne = ref.child('item-1');
  var itemOne = $('#input-item-1').val();
  var itemDescriptionOne = $('#input-item-1-description').val();
  var itemOnePrice = $('#input-item-1-price').val();
  refItemOne.update({"name": itemOne,
                     "description": itemDescriptionOne,
                     "price": itemOnePrice  
                   });
};
//update item two
function updateItemTwo(){
  var ref = firebase.database().ref().child('items');
  var refItemTwo = ref.child('item-2');
  var itemTwo = $('#input-item-2').val();
  var itemDescriptionTwo = $('#input-item-2-description').val();
  var itemTwoPrice = $('#input-item-2-price').val();
  refItemTwo.update({"name": itemTwo,
                     "description": itemDescriptionTwo,
                     "price": itemTwoPrice  
                   });
};
//update item three
function updateItemThree(){
  var ref = firebase.database().ref().child('items');
  var refItemThree = ref.child('item-3');
  var itemThree = $('#input-item-3').val();
  var itemDescriptionThree = $('#input-item-3-description').val();
  var itemThreePrice = $('#input-item-3-price').val();
  refItemThree.update({"name": itemThree,
                     "description": itemDescriptionThree,
                     "price": itemThreePrice  
                   });
};
//update item four
function updateItemFour(){
  var ref = firebase.database().ref().child('items');
  var refItemFour = ref.child('item-4');
  var itemFour = $('#input-item-4').val();
  var itemDescriptionFour = $('#input-item-4-description').val();
  var itemFourPrice = $('#input-item-4-price').val();
  refItemFour.update({"name": itemFour,
                     "description": itemDescriptionFour,
                     "price": itemFourPrice  
                   });
};