import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creativeSchema, type Creative } from "./creative.js";
import {
  statusFacebookBusinessManagerFacebookMarketingAdsApiSchema,
  type StatusFacebookBusinessManagerFacebookMarketingAdsApi,
} from "./status-facebook-business-manager-facebook-marketing-ads-api.js";

export type AdCreate = {
  name: string;
  adsetId: string;
  creative: Creative;
  status: StatusFacebookBusinessManagerFacebookMarketingAdsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adCreateSchema: Schema<AdCreate> = s.object<AdCreate>(
  {
    name: s.string(),
    adsetId: s.string(),
    creative: creativeSchema,
    status: statusFacebookBusinessManagerFacebookMarketingAdsApiSchema,
    _keysMap: {
      adsetId: "adset_id",
    },
  },
  { additionalProperties: s.json() },
);
