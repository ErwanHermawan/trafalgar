/* ------------------------------------------------------------------------------
@name: Card
@description: Card
--------------------------------------------------------------------------------- */

// --- Card
const Card = (() => {
  const handleSetHeight = () => {
    let _height = 0;

    $('.js-blog-card').each((i, el) => {
      if ($(el).find('.blog__box').outerHeight() > _height) {
        _height = $(el).find('.blog__box').outerHeight();
      }

      $('.js-blog-card .blog__box').height(_height);
    });
  }

  // --- init
  const init = () => {
    handleSetHeight();
  }

  // --- return
  return {
    init,
    setHeight: handleSetHeight
  }

})();

export default Card;
