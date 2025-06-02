import React from 'react';
import { cn } from '@/lib/utils';

interface SecondaryActionProps {
  onSignUpClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  text?: string;
  linkText?: string;
}

const SecondaryAction: React.FC<SecondaryActionProps> = ({
  onSignUpClick,
  className,
  text = 'or,',
  linkText = 'sign up',
}) => {
  const handleLinkClick = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (onSignUpClick) {
        event.preventDefault();
        onSignUpClick(event);
      }
      // If onSignUpClick is not provided, it will behave as a normal link (e.g. to '#')
    },
    [onSignUpClick]
  );

  return (
    <p className={cn('text-center text-sm text-muted-foreground', className)}>
      {text}{' '}
      <a
        href="#" // Placeholder href, real app would use a route or implement JS navigation
        onClick={handleLinkClick}
        className="font-medium text-primary hover:text-primary/90 hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-card rounded-sm"
      >
        {linkText}
      </a>
    </p>
  );
};

export default SecondaryAction;
