import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BatchProperties = {
  BatchId: "batch_id",
  CampaignId: "campaign_id",
  Status: "status",
  ExpiresOn: "expires_on",
  LastUpdatedAt: "last_updated_at",
} as const;
export type BatchProperties = (typeof BatchProperties)[keyof typeof BatchProperties] | (string & {});

export const batchPropertiesSchema: EnumSchema<BatchProperties> = s.enumOf<BatchProperties>(BatchProperties);
