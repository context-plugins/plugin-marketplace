import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListBidsFilter = {
  /** justtrack's internal ID for the partner */
  partnerId: number;
  /** The identifier for the campaign that originated with the partner */
  campaignId?: string;
  /** ISO 3166-1 alpha-2 of your country, e.g. 'US' */
  countryCode?: string;
  /** identifier provided by the ad network to target specific source app */
  sourceId?: string;
  /** partner's ID for this adset */
  adSetId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listBidsFilterProperties: s.Shape<ListBidsFilter> = {
  partnerId: s.int(),
  campaignId: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  sourceId: s.optional(s.string()),
  adSetId: s.optional(s.string()),
};

export const listBidsFilterInternalSchema: Schema<ListBidsFilter> = s.object<ListBidsFilter>(
  listBidsFilterProperties,
  { additionalProperties: s.json() },
);

export const listBidsFilterSchema: Schema<ListBidsFilter> = s.lazySchema(() =>
  s.object<ListBidsFilter>(
    {
      ...listBidsFilterProperties,
      partnerId: s.int().check(s.gte(1)),
      campaignId: s.optional(s.string().check(s.minLength(1))),
      countryCode: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      sourceId: s.optional(s.string().check(s.minLength(1))),
      adSetId: s.optional(s.string().check(s.minLength(1))),
    },
    { additionalProperties: s.json() },
  ),
);
