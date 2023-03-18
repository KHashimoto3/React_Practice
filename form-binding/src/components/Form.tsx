import { useState } from "react";

import { CodeForm } from "./CodeForm";

export const Form = () => {
    const [code, setCode] = useState<string[]>([]);

    const addForm = () => {
        const str: string = "テスト";
        setCode([...code,str]);
    }

    return (
        <div>
            <h1>コンポーネント</h1>
            <button onClick={addForm}>追加</button>
            {code.map(codeFormText => (
                <CodeForm formStr={codeFormText} />
            ))}
        </div>
    );
};