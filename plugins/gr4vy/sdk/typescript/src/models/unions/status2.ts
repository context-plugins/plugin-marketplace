import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paymentMethodStatusSchema, type PaymentMethodStatus } from "../payment-method-status.js";

export type Status2 = PaymentMethodStatus[];

export const status2Schema: Schema<Status2> = s.of<Status2>(
  s.union([s.array(s.lazy(() => paymentMethodStatusSchema))]),
);
