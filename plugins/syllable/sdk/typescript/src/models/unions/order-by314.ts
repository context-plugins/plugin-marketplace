import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { campaignPropertiesSchema, type CampaignProperties } from "../campaign-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy314 = CampaignProperties;

export const orderBy314Schema: Schema<OrderBy314> = s.of<OrderBy314>(
  s.union([s.lazy(() => campaignPropertiesSchema)]),
);
