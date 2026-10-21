import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The format of the generated image. One of `url(default)`, `raw`, `png`, `jpeg`, and `jpg`. */
export const ResponseFormat = {
  Url: "url",
  Raw: "raw",
  Png: "png",
  Jpeg: "jpeg",
  Jpg: "jpg",
} as const;
export type ResponseFormat = (typeof ResponseFormat)[keyof typeof ResponseFormat] | (string & {});

export const responseFormatSchema: EnumSchema<ResponseFormat> = s.enumOf<ResponseFormat>(ResponseFormat);
