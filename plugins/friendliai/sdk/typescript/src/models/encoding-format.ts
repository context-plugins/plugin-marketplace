import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EncodingFormat = {
  Float: "float",
  Base64: "base64",
} as const;
export type EncodingFormat = (typeof EncodingFormat)[keyof typeof EncodingFormat] | (string & {});

export const encodingFormatSchema: EnumSchema<EncodingFormat> = s.enumOf<EncodingFormat>(EncodingFormat);
