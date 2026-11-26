import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListCampaignsFilter = {
  /** The identifier for the campaign that originated with the partner */
  campaignId?: string;
  /** justtrack's internal ID for the partner */
  partnerId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listCampaignsFilterProperties: s.Shape<ListCampaignsFilter> = {
  campaignId: s.optional(s.string()),
  partnerId: s.optional(s.int()),
};

export const listCampaignsFilterInternalSchema: Schema<ListCampaignsFilter> = s.object<ListCampaignsFilter>(
  listCampaignsFilterProperties,
  { additionalProperties: s.json() },
);

export const listCampaignsFilterSchema: Schema<ListCampaignsFilter> = s.lazySchema(() =>
  s.object<ListCampaignsFilter>(
    {
      ...listCampaignsFilterProperties,
      campaignId: s.optional(s.string().check(s.minLength(1))),
      partnerId: s.optional(s.int().check(s.gte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
