import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Format to use when sending payload. Defaults to Text. */
export const PayloadFormat = {
  Text: "text",
  Json: "json",
} as const;
export type PayloadFormat = (typeof PayloadFormat)[keyof typeof PayloadFormat] | (string & {});

export const payloadFormatSchema: EnumSchema<PayloadFormat> = s.enumOf<PayloadFormat>(PayloadFormat);
