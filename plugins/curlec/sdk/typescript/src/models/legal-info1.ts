import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LegalInfo1 = {
  pan?: string;
  gst?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const legalInfo1Schema: Schema<LegalInfo1> = s.object<LegalInfo1>(
  {
    pan: s.optional(s.string()),
    gst: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
