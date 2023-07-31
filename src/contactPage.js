export const renderContact = () => {
  const header = document.querySelector("#header");
  const namePattern = /^[a-zA-Z\d]{2,20}$/;
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
  const numberPattern =
    /^(\d{1,2}\s?)?\(?\d{3,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{4,5}$/;

  const contactPage = `     
    <div class="page contact" id="contactPage">
        <div class="contactContainer">
            <h2 class="contactH2">fancy contact us!</h2>
            <form action="submit" method="post" class="contactForm">
                <label class="label" for="name">name:</label>
                <input
                class="input"
                id="name"
                type="text"
                required
                pattern="${namePattern}"
                placeholder="Jack Black"
                />
                <label class="label" for="email">email:</label>
                <input
                class="input"
                id="email"
                type="email"
                pattern="${emailPattern}"
                placeholder="emaily@email.nope"
                />
                <label class="label" for="number">phone number:</label>
                <input
                class="input"
                id="number"
                type="number"
                required
                pattern="${numberPattern}"
                placeholder="55-555-555-5555"
                />
                <label class="label" for="textarea">text:</label>
                <textarea
                class="textarea"
                name="contact"
                id="textarea"
                cols="30"
                rows="6"
                placeholder="your message"
                required
                ></textarea>
                <button class="contactButton" type="submit">submit</button>
            </form>
            <div class="addressWrapper">
      <p class="addressTel">call us!: 44-444-444-4444</p>
      <address class="address">
        Fancy restaurant <br />
        madeUp Str. 123 <br />
        madeUpCity, 44444, madeUpCountry
      </address>
        </div>
    </div>`;

  header.insertAdjacentHTML("afterend", contactPage);
};
