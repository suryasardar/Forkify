import icons from 'url:../../img/icons.svg';

export default class view {
    _data;
    render(data) {
      if(!data ||(Array.isArray(data) && data.length===0)) return this.renderError();
        this._data = data;
        console.log(data);
        const markup = this._generateMarkUp();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };
    _clear() {
        this._parentElement.innerHTML = '';
    }
    renderspinner() {
        const markup = `
        <div class="spinner">
                <svg>
                  <use href="${icons}#icon-loader"></use>
                </svg>
              </div>
        `
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
    };

    renderError(message = this._errorMeassage) {
        const markup = `
        <div class="error">
            <div>
              <svg>
                <use href=" ${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }

    renderMESSAGE(message = this._message) {
        const markup = `
        <div class="message">
            <div>
              <svg>
                <use href=" ${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }
}