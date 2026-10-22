import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [refunds](list-payment-refunds) that belong to this payment. */
export type Url10 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url10Schema: Schema<Url10> = s.object<Url10>({
  href: s.string(),
  type: s.string(),
});
