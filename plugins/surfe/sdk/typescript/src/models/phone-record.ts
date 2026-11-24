import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PhoneRecord = {
  mobilePhone?: string;
  confidenceScore?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const phoneRecordSchema: Schema<PhoneRecord> = s.object<PhoneRecord>(
  {
    mobilePhone: s.optional(s.string()),
    confidenceScore: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
