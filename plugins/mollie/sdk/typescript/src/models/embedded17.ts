import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listPaymentResponseSchema, type ListPaymentResponse } from "./list-payment-response.js";

export type Embedded17 = {
  /** An array of payment objects. */
  payments?: ListPaymentResponse[];
};

export const embedded17Schema: Schema<Embedded17> = s.object<Embedded17>({
  payments: s.optional(s.array(s.lazy(() => listPaymentResponseSchema))),
});
