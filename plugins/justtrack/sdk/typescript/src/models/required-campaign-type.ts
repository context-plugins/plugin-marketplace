import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of campaign you're running. Retargeting campaigns require special set up on partner side
 * to target only existing users.
 */
export const RequiredCampaignType = {
  Acquisition: "acquisition",
  Retargeting: "retargeting",
  Ctv: "ctv",
} as const;
export type RequiredCampaignType =
  | (typeof RequiredCampaignType)[keyof typeof RequiredCampaignType]
  | (string & {});

export const requiredCampaignTypeSchema: EnumSchema<RequiredCampaignType> =
  s.enumOf<RequiredCampaignType>(RequiredCampaignType);
