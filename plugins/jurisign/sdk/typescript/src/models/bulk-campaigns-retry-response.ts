import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bulkCampaignSchema, type BulkCampaign } from "./bulk-campaign.js";

export type BulkCampaignsRetryResponse = {
  data?: BulkCampaign;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkCampaignsRetryResponseSchema: Schema<BulkCampaignsRetryResponse> =
  s.object<BulkCampaignsRetryResponse>(
    {
      data: s.optional(s.lazy(() => bulkCampaignSchema)),
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
