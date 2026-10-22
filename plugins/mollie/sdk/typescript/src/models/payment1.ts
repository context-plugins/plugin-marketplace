import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Payment1 = {
  /**
   * The webhook URL where we will send payment status updates to.
   *
   * This URL will be automatically set as the webhook URL for all payments created for this
   * Checkout Session.
   */
  webhookUrl?: string;
};

export const payment1Schema: Schema<Payment1> = s.object<Payment1>({
  webhookUrl: s.optional(s.string()),
});
