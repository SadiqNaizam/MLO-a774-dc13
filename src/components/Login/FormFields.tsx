import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormFieldsProps {
  className?: string;
  isSubmitting?: boolean;
  onUsernameChange?: (username: string) => void;
  onPasswordChange?: (password: string) => void;
  initialUsername?: string;
  initialPassword?: string;
}

const FormFields: React.FC<FormFieldsProps> = ({
  className,
  isSubmitting = false,
  onUsernameChange,
  onPasswordChange,
  initialUsername = '',
  initialPassword = '',
}) => {
  const [username, setUsername] = React.useState<string>(initialUsername);
  const [password, setPassword] = React.useState<string>(initialPassword);

  const handleUsernameChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setUsername(newValue);
      if (onUsernameChange) {
        onUsernameChange(newValue);
      }
    },
    [onUsernameChange]
  );

  const handlePasswordChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setPassword(newValue);
      if (onPasswordChange) {
        onPasswordChange(newValue);
      }
    },
    [onPasswordChange]
  );

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <div className="space-y-2">
        <Label htmlFor="username">
          Username
        </Label>
        <Input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          disabled={isSubmitting}
          autoComplete="username"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          disabled={isSubmitting}
          autoComplete="current-password"
        />
      </div>
    </div>
  );
};

export default FormFields;
