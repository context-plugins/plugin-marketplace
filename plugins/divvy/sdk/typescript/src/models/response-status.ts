import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the response. */
export const ResponseStatus = {
  Success: "SUCCESS",
  Failure: "FAILURE",
} as const;
export type ResponseStatus = (typeof ResponseStatus)[keyof typeof ResponseStatus] | (string & {});

export const responseStatusSchema: EnumSchema<ResponseStatus> = s.enumOf<ResponseStatus>(ResponseStatus);
