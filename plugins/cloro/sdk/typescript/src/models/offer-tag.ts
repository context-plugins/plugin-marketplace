import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Promotional tag on an offer */
export type OfferTag = {
  /** Tag text */
  text?: string;
  /** Tag tooltip text */
  tooltip?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const offerTagSchema: Schema<OfferTag> = s.object<OfferTag>(
  {
    text: s.optional(s.string()),
    tooltip: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
