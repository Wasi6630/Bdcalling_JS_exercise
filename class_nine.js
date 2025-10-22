
const container = document.getElementById("container");
const commentFag = document.createDocumentFragment();

async function myFunct() {
  try {
    const allCommentRef = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const allComment = await allCommentRef.json();

    allComment.map((element, indx) => {
      let div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
    <span>Post Id: ${element?.postId} </span>
    <h4>Id : ${element?.id} </h4>
    <h3>Name : ${element?.name}</h3>
    <h4>E-mail: ${element?.email}</h4>
    <p>Paragraph : ${element?.body} </p>
    `;
    commentFag.append(div);
    });
    container.append(commentFag);
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}

myFunct();
