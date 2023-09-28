import { CodeConvertReqBody } from "../interfaces/code-convert"

const backendUrl = import.meta.env.VITE_BACKEND_URL

export const getConvertedCode = async (body: CodeConvertReqBody): Promise<any> => {

    const resp = await fetch(backendUrl + "/convert", {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const data = await resp.json()   
    return data
}


export const getResult = async (task_id: string): Promise<any> => {
    const resp = await fetch(`${backendUrl}/convert/${task_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const data = await resp.json()
    return data;

}