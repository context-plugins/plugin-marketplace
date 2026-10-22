import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [captures](list-payment-captures) that belong to this payment. */
export type Url12 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url12Schema: Schema<Url12> = s.object<Url12>({
  href: s.string(),
  type: s.string(),
});
