import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutPayoutOptions = {
  /** The processing channel to be used for the payment. */
  processingChannelId: string;
  /** The ID of the currency account that will fund the payout. */
  sourceId: string;
};

export const checkoutPayoutOptionsSchema: Schema<CheckoutPayoutOptions> = s.object<CheckoutPayoutOptions>({
  processingChannelId: s.string(),
  sourceId: s.string(),
  _keysMap: {
    processingChannelId: "processing_channel_id",
    sourceId: "source_id",
  },
});
