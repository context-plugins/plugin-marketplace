import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listSettlementPaymentResponseSchema,
  type ListSettlementPaymentResponse,
} from "./list-settlement-payment-response.js";

export type Embedded4 = {
  /** An array of payment objects. */
  payments?: ListSettlementPaymentResponse[];
};

export const embedded4Schema: Schema<Embedded4> = s.object<Embedded4>({
  payments: s.optional(s.array(s.lazy(() => listSettlementPaymentResponseSchema))),
});
