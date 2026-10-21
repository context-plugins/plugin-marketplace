import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentServiceTokenSchema, type PaymentServiceToken } from "./payment-service-token.js";

export type PaymentServiceTokens = {
  /** A list of items returned for this request. */
  items: PaymentServiceToken[];
};

export const paymentServiceTokensSchema: Schema<PaymentServiceTokens> = s.object<PaymentServiceTokens>({
  items: s.array(s.lazy(() => paymentServiceTokenSchema)),
});
