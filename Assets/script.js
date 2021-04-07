document.querySelectorAll('#contactIcons li').forEach(li => {
    const tooltip = li.querySelector('span');
    const icon = li.querySelector('i');
    icon.onmouseover = () => {
        tooltip.style.display = 'inline';
        tooltip.style.animation = 'slide-fade 0.2s 1 forwards ease-out';

    };
    icon.onmouseout = () => {
        tooltip.style.display = 'none';
        if(tooltip.getAttribute('id') == 'discord-tooltip')
            tooltip.innerText = `Click to copy username`;
    }
});

document.querySelector('.fa-discord').onclick = () => {
    const usertag = 'HaiseSasaki#0982';
    const tooltip = document.querySelector('#discord-tooltip');
    navigator.clipboard.writeText(usertag).then(() => {
        tooltip.innerText = `Copied!`;
    }, error => {
        console.error(error);
    });
};
