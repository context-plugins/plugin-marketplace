import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RelatedIoc = {
  type?: string;
  value?: string;
  confidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const relatedIocSchema: Schema<RelatedIoc> = s.object<RelatedIoc>(
  {
    type: s.optional(s.string()),
    value: s.optional(s.string()),
    confidence: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
