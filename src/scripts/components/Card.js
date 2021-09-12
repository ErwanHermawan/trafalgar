/* ------------------------------------------------------------------------------
@name: Card
@description: Card
--------------------------------------------------------------------------------- */

// --- Card
const Card = (() => {
  // --- handleSet
  const handleSet = () => {
    handleCheckHeight();
  }

  // --- handleCheckHeight
  const handleCheckHeight = () => {
    let _height = 0;
    handleResetHeight();
    $('.js-blog-list .blog__card').each((i, e) => {
      if (_height < $(e).find('.blog__txt').height()) {
        _height = $(e).find('.blog__txt').height();
      }
    });
    $('.blog__txt').height(_height);
  }

  const handleResetHeight = () => {
    let _attr = $('.blog__txt').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.blog__txt').removeAttr('style');
    }
  }

  // --- init
  const init = () => {
    handleSet();
  }

  // --- return
  return {
    init,
    checkHeight: handleSet
  }

})();

export default Card;
