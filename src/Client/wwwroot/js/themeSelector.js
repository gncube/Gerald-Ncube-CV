window.themeSelector = {
    load: function () {
        fetch('https://bootswatch.com/api/5.json')
            .then(response => response.json())
            .then(data => {
                const themes = data.themes;
                const select = document.querySelector('select');

                themes.forEach((value, index) => {
                    const option = document.createElement('option');
                    option.value = index;
                    option.textContent = value.name;

                    // Set Cyborg as the default selected option
                    if (value.name === "Cyborg") {
                        option.selected = true;
                    }

                    select.append(option);
                });

                select.addEventListener('change', (e) => {
                    const theme = themes[e.target.value];

                    document.querySelector('#theme').setAttribute('href', theme.css);
                    document.querySelector('.themeSelector dt').textContent = theme.name;
                    document.querySelector('.themeSelector dd').textContent = theme.description;

                });

                const changeEvent = new Event('change');
                select.dispatchEvent(changeEvent);
            });
    }
};
