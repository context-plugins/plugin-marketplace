import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CampaignItemTicketResource = {
  id: string;
  campaignId: string;
  name: string;
  description: string;
  price: string;
  totalQuantity: string;
  subtype: string;
  active: string;
  retailPrice: string;
  bundleOnly: string;
  hideRemaining: string;
  scope: string;
  bundles: string;
  customFields: string;
  pictures: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const campaignItemTicketResourceSchema: Schema<CampaignItemTicketResource> =
  s.object<CampaignItemTicketResource>(
    {
      id: s.string(),
      campaignId: s.string(),
      name: s.string(),
      description: s.string(),
      price: s.string(),
      totalQuantity: s.string(),
      subtype: s.string(),
      active: s.string(),
      retailPrice: s.string(),
      bundleOnly: s.string(),
      hideRemaining: s.string(),
      scope: s.string(),
      bundles: s.string(),
      customFields: s.string(),
      pictures: s.string(),
      _keysMap: {
        campaignId: "campaign_id",
        totalQuantity: "total_quantity",
        retailPrice: "retail_price",
        bundleOnly: "bundle_only",
        hideRemaining: "hide_remaining",
        customFields: "custom_fields",
      },
    },
    { additionalProperties: s.json() },
  );
