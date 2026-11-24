import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creative1Schema, type Creative1 } from "./creative1.js";
import {
  status1FacebookBusinessManagerFacebookMarketingAdsApiSchema,
  type Status1FacebookBusinessManagerFacebookMarketingAdsApi,
} from "./status1-facebook-business-manager-facebook-marketing-ads-api.js";

export type Ad = {
  /** The ID of the ad */
  id?: string;
  /** The name of the ad */
  name?: string;
  /** The ID of the parent ad set */
  adsetId?: string;
  /** The ID of the parent campaign */
  campaignId?: string;
  creative?: Creative1;
  status?: Status1FacebookBusinessManagerFacebookMarketingAdsApi;
  /** Effective status considering parent statuses */
  effectiveStatus?: string;
  createdTime?: Date;
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adSchema: Schema<Ad> = s.object<Ad>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    adsetId: s.optional(s.string()),
    campaignId: s.optional(s.string()),
    creative: s.optional(s.lazy(() => creative1Schema)),
    status: s.optional(s.lazy(() => status1FacebookBusinessManagerFacebookMarketingAdsApiSchema)),
    effectiveStatus: s.optional(s.string()),
    createdTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
    _keysMap: {
      adsetId: "adset_id",
      campaignId: "campaign_id",
      effectiveStatus: "effective_status",
      createdTime: "created_time",
      updatedTime: "updated_time",
    },
  },
  { additionalProperties: s.json() },
);
