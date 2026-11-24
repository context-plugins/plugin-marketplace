import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LegalInfo = {
  /** Business PAN number. */
  pan?: string;
  /** GST number (22 chars). */
  gst?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const legalInfoSchema: Schema<LegalInfo> = s.object<LegalInfo>(
  {
    pan: s.optional(s.string()),
    gst: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
