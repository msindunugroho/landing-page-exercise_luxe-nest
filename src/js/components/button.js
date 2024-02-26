export const button = () => {
    const buttons = document.querySelectorAll('[class~="about"], [class~="contact"]');
    
    buttons.forEach(button => {
        if (button.classList.contains('about') && button.classList.contains('contact')) {
            button.setAttribute('href', './index.html');
        }
        if (button.classList.contains('about')) {
            button.innerText = "About";
        }
        if (button.classList.contains('contact')) {
            button.innerText = "Contact";
        }
    });
}

