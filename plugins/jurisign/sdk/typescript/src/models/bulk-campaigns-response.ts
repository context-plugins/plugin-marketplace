import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bulkCampaignSchema, type BulkCampaign } from "./bulk-campaign.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type BulkCampaignsResponse = {
  data?: BulkCampaign[];
  meta?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkCampaignsResponseSchema: Schema<BulkCampaignsResponse> = s.object<BulkCampaignsResponse>(
  {
    data: s.optional(s.array(s.lazy(() => bulkCampaignSchema))),
    meta: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
