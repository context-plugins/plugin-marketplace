import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Method7, method7Schema } from "./method7.js";
import { srcCxFlowIdSchema, type SrcCxFlowId } from "./unions/src-cx-flow-id.js";

export type CheckoutSessionClickToPayPaymentMethod = {
  /** Always `click-to-pay`. @default Method7.ClickToPay */
  method?: Method7;
  /** The merchant transaction ID as provided by the C2P SDK. */
  merchantTransactionId: string;
  /** The SRC correlation ID as provided by the C2P SDK. */
  srcCorrelationId: string;
  /** The DPA ID as provided by the C2P SDK. */
  srcDpaId: string;
  /** The CX Flow ID as provided by the C2P SDK */
  srcCxFlowId?: SrcCxFlowId;
};

export const checkoutSessionClickToPayPaymentMethodSchema: Schema<CheckoutSessionClickToPayPaymentMethod> =
  s.object<CheckoutSessionClickToPayPaymentMethod>({
    method: s.defaulted(method7Schema, Method7.ClickToPay),
    merchantTransactionId: s.string(),
    srcCorrelationId: s.string(),
    srcDpaId: s.string(),
    srcCxFlowId: s.optional(s.lazy(() => srcCxFlowIdSchema)),
    _keysMap: {
      merchantTransactionId: "merchant_transaction_id",
      srcCorrelationId: "src_correlation_id",
      srcDpaId: "src_dpa_id",
      srcCxFlowId: "src_cx_flow_id",
    },
  });
