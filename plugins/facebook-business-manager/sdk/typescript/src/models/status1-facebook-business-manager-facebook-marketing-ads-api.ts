import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1FacebookBusinessManagerFacebookMarketingAdsApi = {
  Active: "ACTIVE",
  Paused: "PAUSED",
  Deleted: "DELETED",
  Archived: "ARCHIVED",
} as const;
export type Status1FacebookBusinessManagerFacebookMarketingAdsApi =
  | (typeof Status1FacebookBusinessManagerFacebookMarketingAdsApi)[keyof typeof Status1FacebookBusinessManagerFacebookMarketingAdsApi]
  | (string & {});

export const status1FacebookBusinessManagerFacebookMarketingAdsApiSchema: EnumSchema<Status1FacebookBusinessManagerFacebookMarketingAdsApi> =
  s.enumOf<Status1FacebookBusinessManagerFacebookMarketingAdsApi>(
    Status1FacebookBusinessManagerFacebookMarketingAdsApi,
  );
