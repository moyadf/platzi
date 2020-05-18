import getData from '../utils/getData'

const Footer = async () => {
    const data = await getData()

    let pages = [];

    for (let i = 1; i <= data.info.pages; i++){
        pages.push(i)
    }

    console.log(pages);

    let pageItem = 1;
    let lastAncle = pages.length;
    
    const view = `
    <div class="footer-pages">
        <h3>Pages</h3>
        <div class="pagination">
            <a href="#/?page=${pageItem}">First</a>
            ${pages.map(() => 
                `<a href="#/?page=${++pageItem}/">${pageItem}</a>`
            ).join('')}
            <a href="#/?page=${lastAncle}">Last</a>
        </div>
    </div>
    `;
    
    return view
}

export default Footer