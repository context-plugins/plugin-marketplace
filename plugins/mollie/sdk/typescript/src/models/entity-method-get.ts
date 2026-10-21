import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountNullableSchema, type AmountNullable } from "./amount-nullable.js";
import { imageSchema, type Image } from "./image.js";
import { issuerSchema, type Issuer } from "./issuer.js";
import { links36Schema, type Links36 } from "./links36.js";
import { methodStatusSchema, type MethodStatus } from "./method-status.js";
import { minimumAmountSchema, type MinimumAmount } from "./minimum-amount.js";

export type EntityMethodGet = {
  /**
   * Indicates the response contains a payment method object. Will always contain the string
   * `method` for this endpoint.
   */
  resource: string;
  id: Record<string, unknown>;
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
  links: Links36;
};

export const entityMethodGetSchema: Schema<EntityMethodGet> = s.object<EntityMethodGet>({
  resource: s.string(),
  id: s.record(s.string(), s.unknown()),
  description: s.string(),
  minimumAmount: minimumAmountSchema,
  maximumAmount: s.nullable(s.lazy(() => amountNullableSchema)),
  image: imageSchema,
  status: s.nullable(s.lazy(() => methodStatusSchema)),
  issuers: s.optional(s.array(s.lazy(() => issuerSchema))),
  links: links36Schema,
  _keysMap: {
    links: "_links",
  },
});
