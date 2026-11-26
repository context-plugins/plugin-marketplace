import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UploadBidInput = {
  /** partner's ID for this adset */
  adSetId?: string;
  /** The identifier for the campaign that originated with the partner */
  campaignId: string;
  /** ISO 3166-1 alpha-2 of your country, e.g. 'US' */
  countryCode?: string;
  /** true, if you want to delete the bid. Defaults to false */
  delete: boolean;
  /** bid value in USD */
  optimalBidUsd: number;
  /** justtrack's internal ID for the partner */
  partnerId: number;
  /** identifier provided by the ad network to target specific source app */
  sourceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const uploadBidInputProperties: s.Shape<UploadBidInput> = {
  adSetId: s.optional(s.string()),
  campaignId: s.string(),
  countryCode: s.optional(s.string()),
  delete: s.boolean(),
  optimalBidUsd: s.float64(),
  partnerId: s.int(),
  sourceId: s.optional(s.string()),
};

export const uploadBidInputInternalSchema: Schema<UploadBidInput> = s.object<UploadBidInput>(
  uploadBidInputProperties,
  { additionalProperties: s.json() },
);

export const uploadBidInputSchema: Schema<UploadBidInput> = s.lazySchema(() =>
  s.object<UploadBidInput>(
    {
      ...uploadBidInputProperties,
      adSetId: s.optional(s.string().check(s.minLength(1))),
      campaignId: s.string().check(s.minLength(1)),
      countryCode: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      optimalBidUsd: s.float64().check(s.gte(0)),
      partnerId: s.int().check(s.gte(1)),
      sourceId: s.optional(s.string().check(s.minLength(1))),
    },
    { additionalProperties: s.json() },
  ),
);
