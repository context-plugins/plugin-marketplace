import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The configured status of the campaign */
export const Status1FacebookBusinessManagerFacebookMarketingCampaignsApi = {
  Active: "ACTIVE",
  Paused: "PAUSED",
  Deleted: "DELETED",
  Archived: "ARCHIVED",
} as const;
export type Status1FacebookBusinessManagerFacebookMarketingCampaignsApi =
  | (typeof Status1FacebookBusinessManagerFacebookMarketingCampaignsApi)[keyof typeof Status1FacebookBusinessManagerFacebookMarketingCampaignsApi]
  | (string & {});

export const status1FacebookBusinessManagerFacebookMarketingCampaignsApiSchema: EnumSchema<Status1FacebookBusinessManagerFacebookMarketingCampaignsApi> =
  s.enumOf<Status1FacebookBusinessManagerFacebookMarketingCampaignsApi>(
    Status1FacebookBusinessManagerFacebookMarketingCampaignsApi,
  );
