import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Method3, method3Schema } from "./method3.js";
import { Type15, type15Schema } from "./type15.js";
import { detailsSchema, type Details } from "./unions/details.js";
import { fingerprintSchema, type Fingerprint } from "./unions/fingerprint.js";
import { id3Schema, type Id3 } from "./unions/id3.js";
import { labelSchema, type Label } from "./unions/label.js";
import { scheme211Schema, type Scheme211 } from "./unions/scheme211.js";

export type CheckoutSessionPaymentMethod = {
  /** Always `payment-method` @default Type15.PaymentMethod */
  type?: Type15;
  /** The ID of the payment method. */
  id?: Id3;
  /** Details for credit or debit card payment method. */
  details?: Details;
  /** The last 4 digits of the the card. */
  label?: Label;
  /** Always `card` @default Method3.Card */
  method?: Method3;
  /** The scheme of the card. */
  scheme?: Scheme211;
  /** The unique hash derived from the card number. */
  fingerprint?: Fingerprint;
};

export const checkoutSessionPaymentMethodSchema: Schema<CheckoutSessionPaymentMethod> =
  s.object<CheckoutSessionPaymentMethod>({
    type: s.defaulted(type15Schema, Type15.PaymentMethod),
    id: s.optional(s.lazy(() => id3Schema)),
    details: s.optional(s.lazy(() => detailsSchema)),
    label: s.optional(s.lazy(() => labelSchema)),
    method: s.defaulted(method3Schema, Method3.Card),
    scheme: s.optional(s.lazy(() => scheme211Schema)),
    fingerprint: s.optional(s.lazy(() => fingerprintSchema)),
  });
