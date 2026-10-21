import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  achBankPaymentMethodCreateSchema,
  type AchBankPaymentMethodCreate,
} from "../ach-bank-payment-method-create.js";
import {
  bacsBankPaymentMethodCreateSchema,
  type BacsBankPaymentMethodCreate,
} from "../bacs-bank-payment-method-create.js";
import {
  cardPaymentMethodCreateSchema,
  type CardPaymentMethodCreate,
} from "../card-payment-method-create.js";
import {
  checkoutSessionPaymentMethodCreateSchema,
  type CheckoutSessionPaymentMethodCreate,
} from "../checkout-session-payment-method-create.js";
import {
  plaidPaymentMethodCreateSchema,
  type PlaidPaymentMethodCreate,
} from "../plaid-payment-method-create.js";
import {
  redirectPaymentMethodCreateSchema,
  type RedirectPaymentMethodCreate,
} from "../redirect-payment-method-create.js";
import {
  sepaBankPaymentMethodCreateSchema,
  type SepaBankPaymentMethodCreate,
} from "../sepa-bank-payment-method-create.js";

export type Body =
  | CardPaymentMethodCreate
  | RedirectPaymentMethodCreate
  | CheckoutSessionPaymentMethodCreate
  | PlaidPaymentMethodCreate
  | AchBankPaymentMethodCreate
  | BacsBankPaymentMethodCreate
  | SepaBankPaymentMethodCreate;

export const bodySchema: Schema<Body> = s.of<Body>(
  s.union([
    s.lazy(() => cardPaymentMethodCreateSchema),
    s.lazy(() => redirectPaymentMethodCreateSchema),
    s.lazy(() => checkoutSessionPaymentMethodCreateSchema),
    s.lazy(() => plaidPaymentMethodCreateSchema),
    s.lazy(() => achBankPaymentMethodCreateSchema),
    s.lazy(() => bacsBankPaymentMethodCreateSchema),
    s.lazy(() => sepaBankPaymentMethodCreateSchema),
  ]),
);
