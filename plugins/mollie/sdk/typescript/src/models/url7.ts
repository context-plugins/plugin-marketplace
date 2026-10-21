import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The URL your customer should visit to make the payment. This is where you should redirect the
 * customer to.
 */
export type Url7 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url7Schema: Schema<Url7> = s.object<Url7>({
  href: s.string(),
  type: s.string(),
});
