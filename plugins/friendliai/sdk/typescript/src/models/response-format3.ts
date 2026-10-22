import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResponseFormat3 = {
  Url: "url",
  Raw: "raw",
  Png: "png",
  Jpeg: "jpeg",
  Jpg: "jpg",
} as const;
export type ResponseFormat3 = (typeof ResponseFormat3)[keyof typeof ResponseFormat3] | (string & {});

export const responseFormat3Schema: EnumSchema<ResponseFormat3> = s.enumOf<ResponseFormat3>(ResponseFormat3);
