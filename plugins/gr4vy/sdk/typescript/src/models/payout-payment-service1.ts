import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Method6, method6Schema } from "./method6.js";
import { Type59, type59Schema } from "./type59.js";
import { displayName9Schema, type DisplayName9 } from "./unions/display-name9.js";
import { id8Schema, type Id8 } from "./unions/id8.js";

/** The payment service used for this payout. */
export type PayoutPaymentService1 = {
  /** Always `payment-service`. @default Type59.PaymentService */
  type?: Type59;
  /** The ID for the payout service. */
  id?: Id8;
  /** Always `card`. @default Method6.Card */
  method?: Method6;
  /** The ID of the connection used for this payout. */
  paymentServiceDefinitionId: string;
  /** The display name of the connection used for this payout. */
  displayName?: DisplayName9;
};

export const payoutPaymentService1Schema: Schema<PayoutPaymentService1> = s.object<PayoutPaymentService1>({
  type: s.defaulted(type59Schema, Type59.PaymentService),
  id: s.optional(s.lazy(() => id8Schema)),
  method: s.defaulted(method6Schema, Method6.Card),
  paymentServiceDefinitionId: s.string(),
  displayName: s.optional(s.lazy(() => displayName9Schema)),
  _keysMap: {
    paymentServiceDefinitionId: "payment_service_definition_id",
    displayName: "display_name",
  },
});
