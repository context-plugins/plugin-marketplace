import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ContentEncoding = {
  Gzip: "gzip",
} as const;
export type ContentEncoding = (typeof ContentEncoding)[keyof typeof ContentEncoding] | (string & {});

export const contentEncodingSchema: EnumSchema<ContentEncoding> = s.enumOf<ContentEncoding>(ContentEncoding);
