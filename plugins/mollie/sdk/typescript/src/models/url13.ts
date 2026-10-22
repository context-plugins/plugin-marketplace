import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The API resource URL of the [settlement](get-settlement) this payment has been settled with. Not
 * present if not yet settled.
 */
export type Url13 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url13Schema: Schema<Url13> = s.object<Url13>({
  href: s.string(),
  type: s.string(),
});
