import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResponseStatus = {
  Accepted: "ACCEPTED",
  Declined: "DECLINED",
  NoResponse: "NO_RESPONSE",
  Tentative: "TENTATIVE",
} as const;
export type ResponseStatus = (typeof ResponseStatus)[keyof typeof ResponseStatus] | (string & {});

export const responseStatusSchema: EnumSchema<ResponseStatus> = s.enumOf<ResponseStatus>(ResponseStatus);
