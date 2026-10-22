import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The deeplink URL to the app of the payment method. Currently only available for `bancontact`. */
export type Url8 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url8Schema: Schema<Url8> = s.object<Url8>({
  href: s.string(),
  type: s.string(),
});
