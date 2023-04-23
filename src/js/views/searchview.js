class searchview {
   _parentEl=document.querySelector('.search');
  getQuery(){
    const query= this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }
 _clearInput(){
    this._parentEl.querySelector('.search__field').value='';
  }
  HandlerSearch(handler){
    this._parentEl.addEventListener('submit',function(e){
      e.preventDefault();
      handler();
    });
  }
   
}
export default new searchview();

