import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { method24Schema, type Method24 } from "./method24.js";
import { Type59, type59Schema } from "./type59.js";

export type TransactionPaymentService = {
  /** Always `payment-service`. @default Type59.PaymentService */
  type?: Type59;
  /** The ID for the payment-service. */
  id: string;
  /** The definition ID of the service used to process this payment. */
  paymentServiceDefinitionId: string;
  /** The payment method that this service handles. */
  method: Method24;
  /** The display name for the payment service. */
  displayName: string;
};

export const transactionPaymentServiceSchema: Schema<TransactionPaymentService> =
  s.object<TransactionPaymentService>({
    type: s.defaulted(type59Schema, Type59.PaymentService),
    id: s.string(),
    paymentServiceDefinitionId: s.string(),
    method: method24Schema,
    displayName: s.string(),
    _keysMap: {
      paymentServiceDefinitionId: "payment_service_definition_id",
      displayName: "display_name",
    },
  });
