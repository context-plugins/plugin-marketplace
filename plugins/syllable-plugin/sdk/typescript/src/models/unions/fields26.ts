import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { campaignPropertiesSchema, type CampaignProperties } from "../campaign-properties.js";

/** The fields to include in the response */
export type Fields26 = CampaignProperties[];

export const fields26Schema: Schema<Fields26> = s.of<Fields26>(
  s.union([s.array(s.lazy(() => campaignPropertiesSchema))]),
);
