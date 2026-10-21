import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountNullableSchema, type AmountNullable } from "./amount-nullable.js";
import { imageSchema, type Image } from "./image.js";
import { issuerSchema, type Issuer } from "./issuer.js";
import { links34Schema, type Links34 } from "./links34.js";
import { methodIdSchema, type MethodId } from "./method-id.js";
import { methodStatusSchema, type MethodStatus } from "./method-status.js";
import { minimumAmountSchema, type MinimumAmount } from "./minimum-amount.js";
import { pricingSchema, type Pricing } from "./pricing.js";

export type ListEntityMethodAll = {
  /**
   * Indicates the response contains a payment method object. Will always contain the string
   * `method` for this endpoint.
   */
  resource: string;
  /**
   * The unique identifier of the payment method. When used during [payment
   * creation](create-payment), the payment method selection screen will be skipped.
   */
  id: MethodId | null;
  /**
   * The full name of the payment method.
   *
   * If a `locale` parameter is provided, the name is translated to the given locale if possible.
   */
  description: string;
  minimumAmount: MinimumAmount;
  /**
   * The maximum payment amount allowed when using this payment method. If there is no
   * method-specific maximum, `null` is returned instead.
   */
  maximumAmount: AmountNullable | null;
  /** URLs of images representing the payment method. */
  image: Image;
  /** The payment method's activation status for this profile. */
  status: MethodStatus | null;
  /**
   * **Optional include.** Array of objects for each 'issuer' that is available for this payment
   * method. Only relevant for iDEAL, KBC/CBC, gift cards, and vouchers.
   */
  issuers?: Issuer[];
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links34;
  /**
   * **Optional include.** Array of objects describing the pricing configuration applicable for this
   * payment method on your account.
   */
  pricing?: Pricing[];
};

export const listEntityMethodAllSchema: Schema<ListEntityMethodAll> = s.object<ListEntityMethodAll>({
  resource: s.string(),
  id: s.nullable(s.lazy(() => methodIdSchema)),
  description: s.string(),
  minimumAmount: minimumAmountSchema,
  maximumAmount: s.nullable(s.lazy(() => amountNullableSchema)),
  image: imageSchema,
  status: s.nullable(s.lazy(() => methodStatusSchema)),
  issuers: s.optional(s.array(s.lazy(() => issuerSchema))),
  links: links34Schema,
  pricing: s.optional(s.array(s.lazy(() => pricingSchema))),
  _keysMap: {
    links: "_links",
  },
});
