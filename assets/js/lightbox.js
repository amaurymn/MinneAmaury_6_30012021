if (document.querySelector("a[data-lightbox]") != null) {
    let lightbox = document.querySelectorAll("a[data-lightbox]");
    let lightboxSetup = '<div class="lightboxAreaC" style="display: none; opacity: 0.0;">';

    lightboxSetup = lightboxSetup + '<div class="lightboxC">';
    lightboxSetup = lightboxSetup + '<div class="lightbox">';
    lightboxSetup = lightboxSetup + '<a href="#" class="lightbox-close"></a>';
    lightboxSetup = lightboxSetup + '<div class="lightbox-item"></div>';
    lightboxSetup = lightboxSetup + '</div>';
    lightboxSetup = lightboxSetup + '</div>';
    lightboxSetup = lightboxSetup + '</div>';

    let div = document.createElement('div');

    div.innerHTML = lightboxSetup;
    document.body.insertBefore(div.children[0], document.body.firstChild);

    for (let i = 0; i < lightbox.length; i++) {
        lightbox[i].onclick = function (e) {
            e.preventDefault();

            let lightboxType = this.dataset["lightbox"];
            let lightboxContent = this.getAttribute("href");

            let lightboxShortDesc = this.getElementsByClassName("text");
            let lightboxItemRef = document.querySelectorAll(".lightbox-item")[0];

            if (lightboxType === "video") {
                let vidC = document.createElement("div");
                vidC.setAttribute('class', 'vid');
                let iframe = document.createElement("iframe");

                if (lightboxContent.includes('https://www.youtube.com/') || lightboxContent.includes('https://youtu.be/')) {
                    iframe.setAttribute("src", lightboxContent.replace('watch?v=', 'embed/') + "?autoplay=1&showinfo=0");
                }
                iframe.setAttribute("allow", 'autoplay; fullscreen');
                iframe.setAttribute("allowfullscreen", 'allowfullscreen');
                iframe.setAttribute("frameborder", "0");
                vidC.appendChild(iframe);
                lightboxItemRef.appendChild(vidC);
            }

            if (lightboxType === "image") {
                let imgC = document.createElement("div");
                imgC.setAttribute('class', 'img');

                let img = document.createElement("img");
                img.setAttribute("src", lightboxContent);

                imgC.appendChild(img);
                lightboxItemRef.appendChild(imgC);
            }

            if (lightboxShortDesc.length > 0) {
                let vidDesc = document.createElement("div");
                vidDesc.setAttribute('class', 'lightbox-text');
                vidDesc.innerHTML = lightboxShortDesc[0].textContent;
                lightboxItemRef.appendChild(vidDesc);
            }

            const lightboxAreaC = document.querySelectorAll(".lightboxAreaC")[0];

            lightboxAreaC.style.display = "block";

            let op = 0.01;
            let timer = setInterval(function () {
                if (op >= 1) {
                    clearInterval(timer);
                }
                lightboxAreaC.style.opacity = op;
                op += 0.1;
            }, 20);

        };

    }

    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });

    let lightboxCz = document.querySelectorAll(".lightboxAreaC");

    lightboxCz[0].onclick = function (e) {
        e.preventDefault();
        closeLightbox();
        $('.video-container iframe').attr('src', '');
    };

    let lightboxClose = document.querySelectorAll(".lightbox-close");
    lightboxClose[0].onclick = function (e) {
        e.preventDefault();
        closeLightbox();
    };

    function closeLightbox() {
        let lightboxAreaC = document.querySelectorAll(".lightboxAreaC")[0];
        let op = 1.01;
        let timer = setInterval(function () {
            if (op <= 0) {
                clearInterval(timer);
                lightboxAreaC.style.display = "none";

                let lightboxItem = document.querySelectorAll(".lightboxC .lightbox-item")[0];
                lightboxItem.innerHTML = "";

                if (document.querySelectorAll(".lightboxC .lightbox-item .lightbox-text").length > 0) {
                    let textEle = document.querySelectorAll(".lightboxC .lightbox-item .lightbox-text")[0];
                    textEle.parentNode.removeChild(textEle);
                }
            }
            lightboxAreaC.style.opacity = op;
            op -= 0.05;
        }, 20);
    }
}
