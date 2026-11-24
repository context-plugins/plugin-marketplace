import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusFacebookBusinessManagerFacebookMarketingAdsApi = {
  Active: "ACTIVE",
  Paused: "PAUSED",
} as const;
export type StatusFacebookBusinessManagerFacebookMarketingAdsApi =
  | (typeof StatusFacebookBusinessManagerFacebookMarketingAdsApi)[keyof typeof StatusFacebookBusinessManagerFacebookMarketingAdsApi]
  | (string & {});

export const statusFacebookBusinessManagerFacebookMarketingAdsApiSchema: EnumSchema<StatusFacebookBusinessManagerFacebookMarketingAdsApi> =
  s.enumOf<StatusFacebookBusinessManagerFacebookMarketingAdsApi>(
    StatusFacebookBusinessManagerFacebookMarketingAdsApi,
  );
