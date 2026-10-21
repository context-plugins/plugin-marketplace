import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Direct link to the organization's Mollie dashboard. */
export type Url44 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url44Schema: Schema<Url44> = s.object<Url44>({
  href: s.string(),
  type: s.string(),
});
