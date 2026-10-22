import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * When set to JSON, the event is automatically formatted with required fields before sending. When
 * set to Raw, only the event's `_raw` value is sent.
 */
export const RequestFormat = {
  Json: "JSON",
  Raw: "raw",
} as const;
export type RequestFormat = (typeof RequestFormat)[keyof typeof RequestFormat] | (string & {});

export const requestFormatSchema: EnumSchema<RequestFormat> = s.enumOf<RequestFormat>(RequestFormat);
