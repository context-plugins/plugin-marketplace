import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bulkCampaignSchema, type BulkCampaign } from "./bulk-campaign.js";

export type BulkCampaignsResponse2 = {
  data?: BulkCampaign;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkCampaignsResponse2Schema: Schema<BulkCampaignsResponse2> = s.object<BulkCampaignsResponse2>(
  {
    data: s.optional(s.lazy(() => bulkCampaignSchema)),
  },
  { additionalProperties: s.json() },
);
