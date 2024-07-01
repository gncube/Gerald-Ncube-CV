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

                    select.append(option);
                });

                select.addEventListener('change', (e) => {
                    const theme = themes[e.target.value];

                    // Fetch and apply the theme variables as CSS custom properties
                    //this.applyThemeVariables(theme.scssVariables);

                    document.querySelector('#theme').setAttribute('href', theme.css);
                    document.querySelector('.themeSelector dt').textContent = theme.name;
                    document.querySelector('.themeSelector dd').textContent = theme.description;

                    // Update the top div's class with the selected theme name
                    //const topDiv = document.querySelector('.top-div'); 
                    //if (topDiv) {
                    //    // Remove any previously added theme class
                    //    topDiv.classList.forEach(className => {
                    //        if (className.startsWith('theme-')) {
                    //            topDiv.classList.remove(className);
                    //        }
                    //    });
                    //    // Add the new theme class
                    //    topDiv.classList.add(`theme-${theme.name.toLowerCase().replace(/\s+/g, '-')}`);
                    //}
                });

                const changeEvent = new Event('change');
                select.dispatchEvent(changeEvent);
            });
    },
    applyThemeVariables: function (variablesUrl) {
        console.log(`Fetching SCSS variables from: ${variablesUrl}`); // Log the URL being fetched
        fetch(variablesUrl)
            .then(response => response.text())
            .then(scss => {
                console.log(`Fetched SCSS content: ${scss.substring(0, 100)}...`); // Log a snippet of the SCSS content
                const root = document.documentElement;
                const lines = scss.split('\n');
                lines.forEach(line => {
                    if (line.startsWith('$')) {
                        const [name, value] = line.split(':').map(part => part.trim());
                        const cssVarName = name.substring(1); // Remove the '$'
                        const cssValue = value.split(';')[0]; // Remove the ';' at the end
                        console.log(`Applying --${cssVarName}: ${cssValue}`); // Log each variable being applied
                        root.style.setProperty(`--${cssVarName}`, cssValue);
                    }
                });
            });
    }
};
