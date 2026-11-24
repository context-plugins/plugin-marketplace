import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { adOfferAdvertiserSchema, type AdOfferAdvertiser } from "./ad-offer-advertiser.js";
import { adOfferCampaignSchema, type AdOfferCampaign } from "./ad-offer-campaign.js";

export type AdOffer = {
  /** The ID of the offer or pending opportunity. */
  id: string;
  /** The payout model for the offer. */
  payoutModel: string;
  /** The formatted payout per eligible click. */
  payoutPerClick: string;
  /** The formatted payout per thousand eligible opens. */
  payoutPerMille: string;
  /** The formatted estimated payout. */
  estimatedPayout: string;
  /** The date the advertisement should be sent by. */
  sendBy?: Date;
  campaign: AdOfferCampaign;
  advertiser: AdOfferAdvertiser;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adOfferSchema: Schema<AdOffer> = s.object<AdOffer>(
  {
    id: s.string(),
    payoutModel: s.string(),
    payoutPerClick: s.string(),
    payoutPerMille: s.string(),
    estimatedPayout: s.string(),
    sendBy: s.optional(s.dateTime()),
    campaign: adOfferCampaignSchema,
    advertiser: adOfferAdvertiserSchema,
    _keysMap: {
      payoutModel: "payout_model",
      payoutPerClick: "payout_per_click",
      payoutPerMille: "payout_per_mille",
      estimatedPayout: "estimated_payout",
      sendBy: "send_by",
    },
  },
  { additionalProperties: s.json() },
);
