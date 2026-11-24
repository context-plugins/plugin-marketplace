import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Float range filter (non-negative) */
export type WebsiteVisitsFloatRange = {
  min?: number;
  max?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const websiteVisitsFloatRangeProperties: s.Shape<WebsiteVisitsFloatRange> = {
  min: s.optional(s.float64()),
  max: s.optional(s.float64()),
};

export const websiteVisitsFloatRangeInternalSchema: Schema<WebsiteVisitsFloatRange> =
  s.object<WebsiteVisitsFloatRange>(websiteVisitsFloatRangeProperties, { additionalProperties: s.json() });

export const websiteVisitsFloatRangeSchema: Schema<WebsiteVisitsFloatRange> = s.lazySchema(() =>
  s.object<WebsiteVisitsFloatRange>(
    {
      ...websiteVisitsFloatRangeProperties,
      min: s.optional(s.float64().check(s.gte(0))),
      max: s.optional(s.float64().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
