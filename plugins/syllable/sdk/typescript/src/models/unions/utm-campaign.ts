import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UtmCampaign = string;

export const utmCampaignSchema: Schema<UtmCampaign> = s.of<UtmCampaign>(s.union([s.string()]));
