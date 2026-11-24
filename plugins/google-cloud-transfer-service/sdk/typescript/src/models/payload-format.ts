import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The desired format of the notification message payloads. */
export const PayloadFormat = {
  PayloadFormatUnspecified: "PAYLOAD_FORMAT_UNSPECIFIED",
  None: "NONE",
  Json: "JSON",
} as const;
export type PayloadFormat = (typeof PayloadFormat)[keyof typeof PayloadFormat] | (string & {});

export const payloadFormatSchema: EnumSchema<PayloadFormat> = s.enumOf<PayloadFormat>(PayloadFormat);
