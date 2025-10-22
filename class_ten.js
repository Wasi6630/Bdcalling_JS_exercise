const container = document.getElementById("container");
const commentFag = document.createDocumentFragment();

async function myFunct() {
  try {
    const allCommentRef = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const allComment = await allCommentRef.json();

    allComment.map((element, indx) => {
      let div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
      <span>Id : ${element?.id} </span>
    <h3>Name : ${element?.name}</h3>
    <h4>User name : ${element?.username}</h4>
    <h4>E-mail: ${element?.email}</h4>
    <h5>Address street: ${element?.address?.street}</h5>
    <h5>Address suite: ${element?.address?.suite}</h5>
    <h5>Address city: ${element?.address?.city}</h5>
    <h5>Address zipcode: ${element?.address?.zipcode}</h5>
    <h5>Address lat: ${element?.address?.geo?.lat}</h5>
    <h4>Address lng: ${element?.phone}</h4>
    <h4>Address lng: ${element?.website}</h4>
    <h5>Address lng: ${element?.company?.name}</h5>
    `;
    commentFag.append(div);
    });
    container.append(commentFag);
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}

myFunct();