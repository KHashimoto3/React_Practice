import { createContext } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
    const { children } = props;

    const sampleObj = { sampleValue: "テスト" };

    //valueの中に、グローバルに扱う実際の値を設定
    return (
        <AdminFlagContext.Provider value={sampleObj}>
            {children}
        </AdminFlagContext.Provider>
    );
};