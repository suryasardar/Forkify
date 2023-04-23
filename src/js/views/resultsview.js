import view from './view.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends view {
    _parentElement = document.querySelector('.results');
    _generateMarkUp() {
        console.log(this._data);
        return this._data.map(this._generateMarkUPPreview).join('');
    }
    _generateMarkUPPreview(results) {
        console.log(results);
        return `
        <li class="preview">
            <a class="preview__link " href="#${results.id}">
              <figure class="preview__fig">
                <img src="${results.image}" alt="${results.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${results.title}</h4>
                <p class="preview__publisher"> ${results.publiser}    </p>
                 
              </div>
            </a>
            </li>
            `;
    }
}




export default new ResultsView()
