import { useEffect, useState } from 'react';

const OFFSET_SHOW_SCROLL = 200;

export default function ScrollToTop() {
  const scrollTop = (top = 0) => {
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > OFFSET_SHOW_SCROLL) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= OFFSET_SHOW_SCROLL) {
      setShowScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });

  return (
    <div id="backtotop" className={`${showScroll ? 'visible' : ''}`}>
      <button className="btn btn-primary btn-rounded" onClick={scrollTop}>
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  );
}
