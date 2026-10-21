import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentMethodStatus2Schema, type PaymentMethodStatus2 } from "./payment-method-status2.js";
import { Type57, type57Schema } from "./type57.js";
import { approvalUrl3Schema, type ApprovalUrl3 } from "./unions/approval-url3.js";
import { token3Schema, type Token3 } from "./unions/token3.js";

export type PaymentServiceToken = {
  /** Always `payment-service-token`. @default Type57.PaymentServiceToken */
  type?: Type57;
  /** The ID for the payment service token. */
  id: string;
  /**
   * The optional URL that the buyer needs to be redirected to to further authorize the token
   * creation.
   */
  approvalUrl?: ApprovalUrl3;
  /** The ID of the payment method used to generate this token */
  paymentMethodId: string;
  /** The ID of the payment method used to generate this token. */
  paymentServiceId: string;
  /** The state of the payment service token. */
  status: PaymentMethodStatus2;
  /** The token value. Will be present if succeeded. */
  token?: Token3;
  /** The date and time when this payment service token was first created in our system. */
  createdAt: Date;
  /** The date and time when this payment service token was last updated in our system. */
  updatedAt: Date;
};

export const paymentServiceTokenSchema: Schema<PaymentServiceToken> = s.object<PaymentServiceToken>({
  type: s.defaulted(type57Schema, Type57.PaymentServiceToken),
  id: s.string(),
  approvalUrl: s.optional(s.lazy(() => approvalUrl3Schema)),
  paymentMethodId: s.string(),
  paymentServiceId: s.string(),
  status: paymentMethodStatus2Schema,
  token: s.optional(s.lazy(() => token3Schema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    approvalUrl: "approval_url",
    paymentMethodId: "payment_method_id",
    paymentServiceId: "payment_service_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
