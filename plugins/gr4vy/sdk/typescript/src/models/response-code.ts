import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResponseCode = {
  Updated: "updated",
} as const;
export type ResponseCode = (typeof ResponseCode)[keyof typeof ResponseCode] | (string & {});

export const responseCodeSchema: EnumSchema<ResponseCode> = s.enumOf<ResponseCode>(ResponseCode);
