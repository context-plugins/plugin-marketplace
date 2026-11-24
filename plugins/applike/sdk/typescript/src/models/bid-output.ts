import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BidOutput = {
  /** justtrack's internal ID for the partner */
  partnerId: number;
  /** The identifier for the campaign that originated with the partner */
  campaignId: string;
  /** bid value in USD */
  value: number;
  /** ISO 3166-1 alpha-2 of your country, e.g. 'US' */
  countryCode?: string;
  /** partner's ID for this adset */
  adSetId?: string;
  /** identifier provided by the ad network to target specific source app */
  sourceId?: string;
  /** current status of the latest bid operation */
  status: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bidOutputProperties: s.Shape<BidOutput> = {
  partnerId: s.int(),
  campaignId: s.string(),
  value: s.float64(),
  countryCode: s.optional(s.string()),
  adSetId: s.optional(s.string()),
  sourceId: s.optional(s.string()),
  status: s.string(),
};

export const bidOutputInternalSchema: Schema<BidOutput> = s.object<BidOutput>(bidOutputProperties, {
  additionalProperties: s.json(),
});

export const bidOutputSchema: Schema<BidOutput> = s.lazySchema(() =>
  s.object<BidOutput>(
    {
      ...bidOutputProperties,
      partnerId: s.int().check(s.gte(1)),
      campaignId: s.string().check(s.minLength(1)),
      value: s.float64().check(s.gte(0)),
      countryCode: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      adSetId: s.optional(s.string().check(s.minLength(1))),
      sourceId: s.optional(s.string().check(s.minLength(1))),
      status: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
