import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contractorSchema, type Contractor } from "./contractor.js";
import { image2Schema, type Image2 } from "./image2.js";
import { linksSchema, type Links } from "./links.js";
import { methodIssuerStatusSchema, type MethodIssuerStatus } from "./method-issuer-status.js";

export type Voucher = {
  /**
   * Indicates the response contains a payment method issuer object. Will always contain the string
   * `issuer` for this endpoint.
   */
  resource: string;
  /** The unique identifier of the payment method issuer. */
  id: string;
  /** The full name of the payment method issuer. */
  name: string;
  /** URLs of images representing the payment method issuer. */
  image: Image2;
  status: MethodIssuerStatus;
  /** Information regarding the *contractor*. Only relevant for `voucher` issuers. */
  contractor: Contractor;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links;
};

export const voucherSchema: Schema<Voucher> = s.object<Voucher>({
  resource: s.string(),
  id: s.string(),
  name: s.string(),
  image: image2Schema,
  status: methodIssuerStatusSchema,
  contractor: contractorSchema,
  links: linksSchema,
  _keysMap: {
    links: "_links",
  },
});
