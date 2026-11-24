import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CampaignDiscountCodeResource = {
  id: string;
  campaignId: string;
  items?: string;
  code: string;
  type: string;
  amount: number;
  used: string;
  uses: string;
  active: string;
  allItems?: string;
  totalDiscount: string;
  startsAt: string;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const campaignDiscountCodeResourceSchema: Schema<CampaignDiscountCodeResource> =
  s.object<CampaignDiscountCodeResource>(
    {
      id: s.string(),
      campaignId: s.string(),
      items: s.optional(s.string()),
      code: s.string(),
      type: s.string(),
      amount: s.float64(),
      used: s.string(),
      uses: s.string(),
      active: s.string(),
      allItems: s.optional(s.string()),
      totalDiscount: s.string(),
      startsAt: s.string(),
      expiresAt: s.string(),
      createdAt: s.string(),
      updatedAt: s.string(),
      _keysMap: {
        campaignId: "campaign_id",
        allItems: "all_items",
        totalDiscount: "total_discount",
        startsAt: "starts_at",
        expiresAt: "expires_at",
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
    { additionalProperties: s.json() },
  );
