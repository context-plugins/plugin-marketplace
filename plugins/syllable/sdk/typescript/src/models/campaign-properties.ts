import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CampaignProperties = {
  Id: "id",
  CampaignName: "campaign_name",
  CampaignVariables: "campaign_variables",
  DailyStartTime: "daily_start_time",
  DailyEndTime: "daily_end_time",
  Source: "source",
  Mode: "mode",
  CallerId: "caller_id",
  UpdatedAt: "updated_at",
  Label: "label",
  Labels: "labels",
  VoicemailDetection: "voicemail_detection",
} as const;
export type CampaignProperties = (typeof CampaignProperties)[keyof typeof CampaignProperties] | (string & {});

export const campaignPropertiesSchema: EnumSchema<CampaignProperties> =
  s.enumOf<CampaignProperties>(CampaignProperties);
