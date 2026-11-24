import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InvalidBidOutput = {
  /** partner's ID for this adset */
  adSetId?: string;
  /** The identifier for the campaign that originated with the partner */
  campaignId: string;
  /** ISO 3166-1 alpha-2 of your country, e.g. 'US' */
  countryCode?: string;
  /** justtrack's internal ID for the partner */
  partnerId: number;
  /** the name given to this ad partner */
  partnerName: string;
  /** identifier provided by the ad network to target specific source app */
  sourceId?: string;
  /** error status for the bid */
  status: string;
  /** error message why the bid is invalid */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const invalidBidOutputProperties: s.Shape<InvalidBidOutput> = {
  adSetId: s.optional(s.string()),
  campaignId: s.string(),
  countryCode: s.optional(s.string()),
  partnerId: s.int(),
  partnerName: s.string(),
  sourceId: s.optional(s.string()),
  status: s.string(),
  message: s.string(),
};

export const invalidBidOutputInternalSchema: Schema<InvalidBidOutput> = s.object<InvalidBidOutput>(
  invalidBidOutputProperties,
  { additionalProperties: s.json() },
);

export const invalidBidOutputSchema: Schema<InvalidBidOutput> = s.lazySchema(() =>
  s.object<InvalidBidOutput>(
    {
      ...invalidBidOutputProperties,
      adSetId: s.optional(s.string().check(s.minLength(1))),
      campaignId: s.string().check(s.minLength(1)),
      countryCode: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      partnerId: s.int().check(s.gte(1)),
      partnerName: s.string().check(s.minLength(1)),
      sourceId: s.optional(s.string().check(s.minLength(1))),
      status: s.string().check(s.minLength(1)),
      message: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
