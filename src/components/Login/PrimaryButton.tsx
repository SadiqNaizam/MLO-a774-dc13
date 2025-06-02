import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface PrimaryButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  isLoading = false,
  className,
  children = 'Log in',
  type = 'submit',
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={cn(
        'w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg',
        className
      )}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : null}
      {isLoading ? 'Logging in...' : children}
    </Button>
  );
};

export default PrimaryButton;
