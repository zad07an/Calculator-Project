import React, { useContext } from "react";
import { LuDelete } from "react-icons/lu";
import Button from "./Button";
import { CalcContext } from "../context/CalcProvider";

const Calculator: React.FC = () => {
  const {
    result,
    isError,
    error,
    handleClear,
    handleGetChar,
    handleGetResult,
    handleRemoveLastCharacter
  } = useContext(CalcContext);

  return (
    <div className=" w-fit border-4 border-gray-500 rounded-lg overflow-hidden bg-slate-200">
      <table className=" shadow-md">
        <thead>
          <tr>
            <td colSpan={4}>
              <div
                className={` w-full h-20 border flex items-center justify-end font-semibold tracking-widest relative overflow-hidden bg-slate-500`}
              >
                <p
                  className={` absolute ${
                    isError ? "right-2 opacity-100" : "right-[-100%] opacity-0"
                  } transition-all duration-500 text-red-400 text-xl`}
                >
                  {error}
                </p>
                <p
                  className={` absolute ${
                    isError ? "right-[-100%] opacity-0" : "right-2 opacity-100"
                  } transition-all duration-500 text-slate-200 text-3xl`}
                >
                  {result}
                </p>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          {/* first row */}
          <tr>
            <td>
              <Button style="hover:bg-red-600 bg-red-500 text-white h-20" onClick={handleClear}>
                AC
              </Button>
            </td>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar("/")}
              >
                /
              </Button>
            </td>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar("*")}
              >
                x
              </Button>
            </td>
            <td>
              <Button
                style="text-red-500 hover:text-red-600 hover:bg-slate-300 h-20"
                onClick={handleRemoveLastCharacter}
              >
                <LuDelete />
              </Button>
            </td>
          </tr>
          {/* second row */}
          <tr>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar("7")}
              >
                7
              </Button>
            </td>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar("8")}
              >
                8
              </Button>
            </td>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar("9")}
              >
                9
              </Button>
            </td>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar("-")}
              >
                -
              </Button>
            </td>
          </tr>
          {/* third row */}
          <tr>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar("4")}
              >
                4
              </Button>
            </td>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar("5")}
              >
                5
              </Button>
            </td>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar("6")}
              >
                6
              </Button>
            </td>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar("+")}
              >
                +
              </Button>
            </td>
          </tr>
          {/* fourth row */}
          <tr>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar("1")}
              >
                1
              </Button>
            </td>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar("2")}
              >
                2
              </Button>
            </td>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar("3")}
              >
                3
              </Button>
            </td>
            <td rowSpan={2}>
              <Button
                style="bg-purple-500 text-white hover:bg-purple-600 h-[162px]"
                onClick={handleGetResult}
              >
                =
              </Button>
            </td>
          </tr>
          {/* fifth row */}
          <tr>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar(".")}
              >
                .
              </Button>
            </td>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar("0")}
              >
                0
              </Button>
            </td>
            <td>
              <Button
                style="hover:bg-slate-300 text-purple-600 h-20"
                onClick={() => handleGetChar("%")}
              >
                %
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
