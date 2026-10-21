import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linksSchema, type Links } from "./links.js";
import { methodIssuerStatusSchema, type MethodIssuerStatus } from "./method-issuer-status.js";

export type Giftcard = {
  /**
   * Indicates the response contains a payment method issuer object. Will always contain the string
   * `issuer` for this endpoint.
   */
  resource: string;
  /** The unique identifier of the payment method issuer. */
  id: string;
  /** The full name of the payment method issuer. */
  description: string;
  status: MethodIssuerStatus;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links;
};

export const giftcardSchema: Schema<Giftcard> = s.object<Giftcard>({
  resource: s.string(),
  id: s.string(),
  description: s.string(),
  status: methodIssuerStatusSchema,
  links: linksSchema,
  _keysMap: {
    links: "_links",
  },
});
