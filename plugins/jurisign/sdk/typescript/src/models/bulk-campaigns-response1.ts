import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bulkCampaignSchema, type BulkCampaign } from "./bulk-campaign.js";

export type BulkCampaignsResponse1 = {
  data?: BulkCampaign;
  skippedRecipients?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkCampaignsResponse1Schema: Schema<BulkCampaignsResponse1> = s.object<BulkCampaignsResponse1>(
  {
    data: s.optional(s.lazy(() => bulkCampaignSchema)),
    skippedRecipients: s.optional(s.int()),
    _keysMap: {
      skippedRecipients: "skipped_recipients",
    },
  },
  { additionalProperties: s.json() },
);
