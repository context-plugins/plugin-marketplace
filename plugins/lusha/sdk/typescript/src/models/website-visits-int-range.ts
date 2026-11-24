import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Integer range filter (non-negative) */
export type WebsiteVisitsIntRange = {
  min?: number;
  max?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const websiteVisitsIntRangeProperties: s.Shape<WebsiteVisitsIntRange> = {
  min: s.optional(s.int()),
  max: s.optional(s.int()),
};

export const websiteVisitsIntRangeInternalSchema: Schema<WebsiteVisitsIntRange> =
  s.object<WebsiteVisitsIntRange>(websiteVisitsIntRangeProperties, { additionalProperties: s.json() });

export const websiteVisitsIntRangeSchema: Schema<WebsiteVisitsIntRange> = s.lazySchema(() =>
  s.object<WebsiteVisitsIntRange>(
    {
      ...websiteVisitsIntRangeProperties,
      min: s.optional(s.int().check(s.gte(0))),
      max: s.optional(s.int().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
