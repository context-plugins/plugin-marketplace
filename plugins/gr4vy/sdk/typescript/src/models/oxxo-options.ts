import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { approvalUrlSchema, type ApprovalUrl } from "./unions/approval-url.js";
import {
  paymentMethodExpiresAt1Schema,
  type PaymentMethodExpiresAt1,
} from "./unions/payment-method-expires-at1.js";

export type OxxoOptions = {
  /**
   * Defines a custom expiration time (unix time) after which Oxxo payment requests are cancelled
   */
  paymentMethodExpiresAt?: PaymentMethodExpiresAt1;
  /** Approval URL that will receive a charge payment method reference. */
  approvalUrl?: ApprovalUrl;
};

export const oxxoOptionsSchema: Schema<OxxoOptions> = s.object<OxxoOptions>({
  paymentMethodExpiresAt: s.optional(s.lazy(() => paymentMethodExpiresAt1Schema)),
  approvalUrl: s.optional(s.lazy(() => approvalUrlSchema)),
  _keysMap: {
    paymentMethodExpiresAt: "payment_method_expires_at",
    approvalUrl: "approval_url",
  },
});
