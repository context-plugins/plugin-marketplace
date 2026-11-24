import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CampaignReportsGetRequest = {
  campaignId?: string;
  assetId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const campaignReportsGetRequestSchema: Schema<CampaignReportsGetRequest> =
  s.object<CampaignReportsGetRequest>(
    {
      campaignId: s.optional(s.string()),
      assetId: s.optional(s.string()),
      _keysMap: {
        campaignId: "campaign_id",
        assetId: "asset_id",
      },
    },
    { additionalProperties: s.json() },
  );
