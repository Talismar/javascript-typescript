type objType = {
  method: string;
  url: string;
  success: (responseText: string) => void;
  error: (responseText: string) => void;
};

const AJAX = (obj: objType) => {
  const xhr = new XMLHttpRequest();

  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      obj.success(xhr.responseText);
    } else {
      obj.error(xhr.statusText);
    }
  });
};

document.addEventListener("click", (e: MouseEvent) => {
  const el = e.target as HTMLElement;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    loadPage(el);
  }
});

function loadPage(el: HTMLElement) {
  const href = el.getAttribute("href") as string;

  fetch(href)
    .then((response) => {
      return response.text();
    })
    .then((responseHTML) => {
      loadResults(responseHTML);
    })
    .catch((error) => {
      console.log(error);
    });

  // AJAX({
  //   method: "GET",
  //   url: href,
  //   success(response) {
  //     loadResults(response);
  //   },
  //   error(error) {
  //     console.log(error);
  //   },
  // });
}

function loadResults(response: string) {
  const results = document.querySelector(".results") as Element;
  results.innerHTML = response;
}
