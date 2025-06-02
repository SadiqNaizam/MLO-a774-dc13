import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FormFields from '../Login/FormFields';
import PrimaryButton from '../Login/PrimaryButton';
import SecondaryAction from '../Login/SecondaryAction';

interface LoginCardProps {
  className?: string;
  title?: string;
  initialUsername?: string;
  initialPassword?: string;
  onLoginSubmit?: (data: { username: string; password: string }) => void | Promise<void>;
  onSignUpClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  isSubmitting?: boolean;
}

const LoginCard: React.FC<LoginCardProps> = ({
  className,
  title = 'Log in',
  initialUsername: propInitialUsername = '',
  initialPassword: propInitialPassword = '',
  onLoginSubmit,
  onSignUpClick,
  isSubmitting = false,
}) => {
  // State to hold current values from FormFields, initialized by props
  const [currentUsername, setCurrentUsername] = React.useState<string>(propInitialUsername);
  const [currentPassword, setCurrentPassword] = React.useState<string>(propInitialPassword);

  // Effect to update state if initial props change (e.g., after a reset or external update)
  React.useEffect(() => {
    setCurrentUsername(propInitialUsername);
  }, [propInitialUsername]);

  React.useEffect(() => {
    setCurrentPassword(propInitialPassword);
  }, [propInitialPassword]);

  const handleFormSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (onLoginSubmit) {
        onLoginSubmit({ username: currentUsername, password: currentPassword });
      }
    },
    [onLoginSubmit, currentUsername, currentPassword]
  );

  return (
    <Card
      className={cn(
        'max-w-md w-full bg-card rounded-lg shadow-md', // As per Layout Requirements: overall.sizing.card
        className
      )}
    >
      {title && (
        <CardHeader className={cn('text-center p-6 mb-6')}> {/* As per Layout Requirements: header.layout & Shadcn default padding */}
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className={cn(
        'p-6', // Default padding for CardContent
        title ? 'pt-0' : '' // Adjust top padding if header is present and has margin-bottom
      )}>
        <form onSubmit={handleFormSubmit}>
          {/* As per Layout Requirements: mainContent.layout for the container of form elements */}
          <div className="flex flex-col space-y-6">
            <FormFields
              initialUsername={propInitialUsername} // FormFields uses this to set its internal initial state
              initialPassword={propInitialPassword} // FormFields uses this to set its internal initial state
              onUsernameChange={setCurrentUsername} // Callback to update LoginCard's username state
              onPasswordChange={setCurrentPassword} // Callback to update LoginCard's password state
              isSubmitting={isSubmitting}
            />
            <PrimaryButton type="submit" isLoading={isSubmitting}>
              Log in
            </PrimaryButton>
            <SecondaryAction onSignUpClick={onSignUpClick} />
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
