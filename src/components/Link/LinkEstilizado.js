// LinkEstilizado.js
import React from 'react';

const LinkEstilizado = React.forwardRef(({ children, style, ...props }, ref) => {
  return (
    <span ref={ref} style={{ color: 'black', ...style }} {...props}>
      {children}
    </span>
  );
});

export default LinkEstilizado;
