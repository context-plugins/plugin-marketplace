import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Direct link to the onboarding process in the Mollie dashboard. The merchant can be redirected to
 * this page to complete their onboarding.
 */
export type Url57 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url57Schema: Schema<Url57> = s.object<Url57>({
  href: s.string(),
  type: s.string(),
});
