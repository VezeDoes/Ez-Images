let images = document.getElementsByTagName('img');

const toDataURL = (url) => {
    return fetch(url).then((response) => {
            return response.blob();
        }).then(blob => {
            return URL.createObjectURL(blob);
        });
}

for (let image = 0; image < images.length; image++) {
    let btn = document.createElement("button");

    btn.className = "eze-download-btn";
    btn.innerText = "\uD83E\uDC2F";

    // we style the button
    const btnStyles = btn.style;
    btnStyles.textAlign = "center";
    btnStyles.position = "absolute";
    btnStyles.top = "3px";
    btnStyles.left = "3px";
    btnStyles.lineHeight = "18px";

    btnStyles.color = "red";
    btnStyles.backgroundColor = "white";
    btnStyles.borderColor = "red";
    btnStyles.borderStyle = "solid";
    btnStyles.borderWidth = "2px";
    btnStyles.borderRadius = "5px";
    btnStyles.fontSize = "20px";

    const imgSrc = images[image].src;

    btn.addEventListener('mouseover', (e) => {
        e.stopImmediatePropagation();

        const download = async () => {
            const a = document.createElement("a");
            a.href = await toDataURL(`${imgSrc}`);
            a.download = `eze-img${image}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        };

        download();
    })

    const imageParent = images[image].parentElement;
    console.log(imageParent);
    imageParent.append(btn);
}

