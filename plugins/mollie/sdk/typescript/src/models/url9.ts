import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Direct link to the payment in the Mollie Dashboard. */
export type Url9 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url9Schema: Schema<Url9> = s.object<Url9>({
  href: s.string(),
  type: s.string(),
});
