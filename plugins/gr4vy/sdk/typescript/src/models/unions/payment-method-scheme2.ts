import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSchemeSchema, type CardScheme } from "../card-scheme.js";

export type PaymentMethodScheme2 = CardScheme;

export const paymentMethodScheme2Schema: Schema<PaymentMethodScheme2> = s.of<PaymentMethodScheme2>(
  s.union([s.lazy(() => cardSchemeSchema)]),
);
