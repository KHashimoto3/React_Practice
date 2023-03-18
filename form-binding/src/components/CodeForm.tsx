import { useState } from "react"

type formType = {
    formStr: string
}

export const CodeForm = (props: formType) => {

    const [formStr, setFormStr] = useState(props.formStr);

    return (
        <textarea value={formStr} onChange={(event) => setFormStr(event.target.value)}></textarea>
    )
}