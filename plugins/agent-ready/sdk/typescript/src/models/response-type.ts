import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResponseType = {
  Answer: "answer",
  Failure: "failure",
  Elicitation: "elicitation",
  Promise: "promise",
} as const;
export type ResponseType = (typeof ResponseType)[keyof typeof ResponseType] | (string & {});

export const responseTypeSchema: EnumSchema<ResponseType> = s.enumOf<ResponseType>(ResponseType);
