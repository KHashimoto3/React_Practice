import { useState } from "react";

import { CodeForm } from "./CodeForm";

export const Form = () => {
    const [code, setCode] = useState<string[]>([]);

    return (
        <div>
            <h1>コンポーネント</h1>
            <CodeForm />
        </div>
    );
};