import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  applePayPaymentMethodCreateSchema,
  type ApplePayPaymentMethodCreate,
} from "../apple-pay-payment-method-create.js";
import {
  baseBankPaymentMethodCreateSchema,
  type BaseBankPaymentMethodCreate,
} from "../base-bank-payment-method-create.js";
import {
  cardWithUrlPaymentMethodCreateSchema,
  type CardWithUrlPaymentMethodCreate,
} from "../card-with-url-payment-method-create.js";
import {
  checkoutSessionWithUrlPaymentMethodCreateSchema,
  type CheckoutSessionWithUrlPaymentMethodCreate,
} from "../checkout-session-with-url-payment-method-create.js";
import {
  clickToPayFpanPaymentMethodCreateSchema,
  type ClickToPayFpanPaymentMethodCreate,
} from "../click-to-pay-fpan-payment-method-create.js";
import {
  clickToPayPaymentMethodCreateSchema,
  type ClickToPayPaymentMethodCreate,
} from "../click-to-pay-payment-method-create.js";
import {
  googlePayFpanPaymentMethodCreateSchema,
  type GooglePayFpanPaymentMethodCreate,
} from "../google-pay-fpan-payment-method-create.js";
import {
  googlePayPaymentMethodCreateSchema,
  type GooglePayPaymentMethodCreate,
} from "../google-pay-payment-method-create.js";
import {
  networkTokenPaymentMethodCreateSchema,
  type NetworkTokenPaymentMethodCreate,
} from "../network-token-payment-method-create.js";
import {
  pazePaymentMethodCreateSchema,
  type PazePaymentMethodCreate,
} from "../paze-payment-method-create.js";
import {
  plaidPaymentMethodCreateSchema,
  type PlaidPaymentMethodCreate,
} from "../plaid-payment-method-create.js";
import {
  redirectPaymentMethodCreateSchema,
  type RedirectPaymentMethodCreate,
} from "../redirect-payment-method-create.js";
import {
  tokenPaymentMethodCreateSchema,
  type TokenPaymentMethodCreate,
} from "../token-payment-method-create.js";

/**
 * The optional payment method to use for this transaction. This field is required if no
 * `gift_cards` have been added.
 */
export type PaymentMethod11 =
  | CardWithUrlPaymentMethodCreate
  | RedirectPaymentMethodCreate
  | TokenPaymentMethodCreate
  | ApplePayPaymentMethodCreate
  | ClickToPayPaymentMethodCreate
  | ClickToPayFpanPaymentMethodCreate
  | GooglePayPaymentMethodCreate
  | GooglePayFpanPaymentMethodCreate
  | PazePaymentMethodCreate
  | NetworkTokenPaymentMethodCreate
  | PlaidPaymentMethodCreate
  | BaseBankPaymentMethodCreate
  | CheckoutSessionWithUrlPaymentMethodCreate;

export const paymentMethod11Schema: Schema<PaymentMethod11> = s.of<PaymentMethod11>(
  s.union([
    s.lazy(() => cardWithUrlPaymentMethodCreateSchema),
    s.lazy(() => redirectPaymentMethodCreateSchema),
    s.lazy(() => tokenPaymentMethodCreateSchema),
    s.lazy(() => applePayPaymentMethodCreateSchema),
    s.lazy(() => clickToPayPaymentMethodCreateSchema),
    s.lazy(() => clickToPayFpanPaymentMethodCreateSchema),
    s.lazy(() => googlePayPaymentMethodCreateSchema),
    s.lazy(() => googlePayFpanPaymentMethodCreateSchema),
    s.lazy(() => pazePaymentMethodCreateSchema),
    s.lazy(() => networkTokenPaymentMethodCreateSchema),
    s.lazy(() => plaidPaymentMethodCreateSchema),
    s.lazy(() => baseBankPaymentMethodCreateSchema),
    s.lazy(() => checkoutSessionWithUrlPaymentMethodCreateSchema),
  ]),
);
