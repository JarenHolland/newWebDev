var allComments = [];

//Edit
function editComment(tempPosition){
    $("#perEdit" + tempPosition).removeClass("hide").addClass("show")
};

function submitComment(tempPosition){
    var newvalue = $("#perEdit"+tempPosition+" input").val();
    var tempUser = $("#username"+tempPosition).text();
    $("#commentRewrite" + tempPosition).text(newvalue);
    allComments[tempPosition] = {username:tempUser,commentText:newvalue};
    $("#perEdit" + tempPosition).removeClass("show").addClass("hide")
};

//Delete
function deleteComment(tempPosition){
    allComments.splice(tempPosition,1);
    initPage();
};

//Comment
function addComment(){
    var displayName = $("#displayName").val();
    var newComment = $("#newComment").val();
    if(displayName != "" && newComment != ""){
        allComments.unshift({username:displayName,commentText:newComment});
        initPage();
        $("#displayName").val("");
        $("#newComment").val("");
    };
};

function initPage(){
    var contentString = "";
    for (count = 0; count<allComments.length; count++) {
        if (count == allComments.length - 1){
             var commentString = '<div class="lastComment">'
        }
        else {
            var commentString = '<div class="commentBox">';
        };
        commentString = commentString + '<div class="image">' + 
                                    '<image src="userImage.png" width="60" height="60"></image>' +
                                '</div>' +
                                '<div class="commentBody">' +
                                    '<div class="commentText" >' +
                                        '<username id="username' + count + '">' + allComments[count].username + '</username>' +
                                        '<comment id="commentRewrite' + count +'">' + allComments[count].commentText + '</comment>' +
                                    '</div>' +
                                    '<editBox class="hide" id="perEdit' + count +'">' +
                                        '<input class="editClass" type="text" value="' + allComments[count].commentText + '"></input>' +
                                        '<editSubmit onclick="submitComment('+count+');">Submit</editSubmit>' +
                                    '</editBox>' +
                                '</div>' +
                                '<div class="menu">' +
                                    '<menuButton onclick="editComment('+count+');">Edit</menuButton>' +
                                    '<menuButton onclick="deleteComment('+count+');">Delete</menuButton>' +
                                '</div>' +
                            '</div>';
        contentString = contentString + commentString;
    };
    $("#commentSection").html(contentString);
};