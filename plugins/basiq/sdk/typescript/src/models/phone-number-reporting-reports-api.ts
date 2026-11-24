import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PhoneNumberReportingReportsApi = {
  /** International Phone Number */
  international?: string;
  /** Local Phone Number */
  local?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const phoneNumberReportingReportsApiSchema: Schema<PhoneNumberReportingReportsApi> =
  s.object<PhoneNumberReportingReportsApi>(
    {
      international: s.optional(s.string()),
      local: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
