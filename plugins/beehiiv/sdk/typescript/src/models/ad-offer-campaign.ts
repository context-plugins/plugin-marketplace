import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AdOfferCampaign = {
  /** The campaign name. */
  name: string;
  /** The message from the advertiser to the publisher. */
  messageToPublisher?: string;
  /** The item promoted by the campaign. */
  promotedItem?: string;
  /** Additional promoted item details when applicable. */
  promotedItemOther?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adOfferCampaignSchema: Schema<AdOfferCampaign> = s.object<AdOfferCampaign>(
  {
    name: s.string(),
    messageToPublisher: s.optional(s.string()),
    promotedItem: s.optional(s.string()),
    promotedItemOther: s.optional(s.string()),
    _keysMap: {
      messageToPublisher: "message_to_publisher",
      promotedItem: "promoted_item",
      promotedItemOther: "promoted_item_other",
    },
  },
  { additionalProperties: s.json() },
);
