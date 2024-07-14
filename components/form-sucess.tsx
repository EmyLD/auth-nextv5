import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccess {
  message?: string;
}

export const FormSucces = ({ message }: FormSuccess) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive text-emerald-500">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
