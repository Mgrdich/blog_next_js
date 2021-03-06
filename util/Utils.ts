import {NextApiResponse} from "next";
import {API_Response} from "../types/global";

export default class Utils {
    static log(message?: any, ...optionalParams: any[]): void {
        if (process.env.NODE_ENV === "development") {
            console.log(message, ...optionalParams);
        }
    }

    static errorReturn(res: NextApiResponse<API_Response>, text: string = 'Something went Wrong') {
        return res.status(301).json({
            status: 0,
            message: text
        });
    }

    static createdSuccessfully(res: NextApiResponse<API_Response> , text: string = 'created Successfully' , content?: any) {
        return res.status(201).json({
            status: 1,
            message: text,
            ...content
        });
    }
}