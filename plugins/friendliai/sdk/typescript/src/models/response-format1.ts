import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResponseFormat1 = {
  Raw: "raw",
  Jpeg: "jpeg",
} as const;
export type ResponseFormat1 = (typeof ResponseFormat1)[keyof typeof ResponseFormat1] | (string & {});

export const responseFormat1Schema: EnumSchema<ResponseFormat1> = s.enumOf<ResponseFormat1>(ResponseFormat1);
