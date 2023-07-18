import { createContext, ReactNode, useState } from "react";

interface CalcProviderProps {
  children: ReactNode;
}

interface CalcContextProps {
  result: string;
  isError: boolean;
  error: string;
  handleGetChar: (key: string) => void;
  handleClear: () => void;
  handleRemoveLastCharacter: () => void;
  handleGetResult: () => void;
}

export const CalcContext = createContext<CalcContextProps>(null!);

const CalcProvider: React.FC<CalcProviderProps> = ({ children }) => {
  const [result, setResult] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleGetChar = (key: string): void => {
    if (result.length === 0) {
      if (key === "/" || key === "*") {
        return;
      }
    }
    setResult(prevKey => prevKey + key);
  };

  const handleClear = (): void => {
    setResult("");
  };

  const handleRemoveLastCharacter = (): void => {
    setResult(prevChar => prevChar.slice(0, -1));
  };

  const handleGetResult = (): void => {
    try {
      setResult(eval(result));
    } catch (err) {
      setIsError(true);
      setError("Expected expression");
      setTimeout(() => {
        setIsError(false);
        setError("");
      }, 1000);
    }
  };

  return (
    <CalcContext.Provider
      value={{
        handleClear,
        handleGetChar,
        handleGetResult,
        handleRemoveLastCharacter,
        error,
        isError,
        result
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
