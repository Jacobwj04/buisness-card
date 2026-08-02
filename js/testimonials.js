class Api {
    data;
    url;

    constructor(url) {
        this.url = url;
    }

    async getData() {
        const response = await fetch(this.url);
        const json = await response.json();

        this.data = json.testimonials;
        return this.data;
    }
}

const loadData = async () => {
    const api = new Api('./data/testimonials.json');
    const testimonials = await api.getData();
    console.log(testimonials);
    buildTestimonials(testimonials);
}

const buildTestimonials = (data) =>{
    let newData = data;

    const testimonialList = document.getElementById('testimonials--list');

    for (let i = 0; i < data.length; i++) {
        // Add the testimonial list item to the list
        const testimonial = document.createElement("li");
        testimonial.classList.add("testimonial--item");
        testimonialList.appendChild(testimonial);

        // Add the text next
        const testimonialText = document.createElement("p");
        testimonialText.classList.add("testimonial--text");
        testimonialText.innerText = data[i].text;
        testimonial.appendChild(testimonialText);

        // Add the footer to the testimonial list item
        const testimonialFooter = document.createElement("section");
        testimonialFooter.classList.add("testimonial--footer");
        testimonial.appendChild(testimonialFooter);

        // Add extra info to the footer
        const testimonialFooterAuthor = document.createElement("h3");
        testimonialFooterAuthor.classList.add("testimonial--author");
        testimonialFooterAuthor.innerText = data[i].author;
        testimonialFooter.appendChild(testimonialFooterAuthor);

        const testimonialFooterLocation = document.createElement("h3");
        testimonialFooterLocation.classList.add("testimonial--location");
        testimonialFooterLocation.innerText = data[i].location;
        testimonialFooter.appendChild(testimonialFooterLocation);
    }
}


loadData();