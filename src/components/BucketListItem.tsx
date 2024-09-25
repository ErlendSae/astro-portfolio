// BucketListItem.tsx
import { useState } from 'react';

interface BucketListItemProps {
  action: string;
  done: boolean;
}

export default function BucketListItem({ action, done }: BucketListItemProps) {
  const [isChecked, setIsChecked] = useState(done);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={handleToggle}
    >
      <input
        type="checkbox"
        checked={isChecked}
        readOnly
        className="form-checkbox h-5 w-5 text-teal-600"
      />
      <li className={`text-lg ${isChecked ? 'line-through text-gray-400' : ''}`}>
        {action}
      </li>
    </div>
  );
}
