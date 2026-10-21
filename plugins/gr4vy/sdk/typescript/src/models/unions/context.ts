import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  googlePayPaymentOptionContextSchema,
  type GooglePayPaymentOptionContext,
} from "../google-pay-payment-option-context.js";
import { paymentOptionContextSchema, type PaymentOptionContext } from "../payment-option-context.js";
import {
  walletPaymentOptionContextSchema,
  type WalletPaymentOptionContext,
} from "../wallet-payment-option-context.js";

export type Context = WalletPaymentOptionContext | GooglePayPaymentOptionContext | PaymentOptionContext;

export const contextSchema: Schema<Context> = s.of<Context>(
  s.union([
    s.lazy(() => walletPaymentOptionContextSchema),
    s.lazy(() => googlePayPaymentOptionContextSchema),
    s.lazy(() => paymentOptionContextSchema),
  ]),
);
