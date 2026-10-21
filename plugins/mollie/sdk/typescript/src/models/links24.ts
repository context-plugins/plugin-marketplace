import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./url.js";
import { url7Schema, type Url7 } from "./url7.js";

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type Links24 = {
  /** In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. */
  self: Url;
  /**
   * The URL your customer should visit to make the payment. This is where you should redirect the
   * customer to.
   */
  paymentLink: Url7;
};

export const links24Schema: Schema<Links24> = s.object<Links24>({
  self: urlSchema,
  paymentLink: url7Schema,
});
