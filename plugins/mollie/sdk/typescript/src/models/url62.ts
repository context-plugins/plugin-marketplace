import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The link you can send your customer to, where they can either log in and link their account, or
 * sign up and proceed with onboarding.
 */
export type Url62 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url62Schema: Schema<Url62> = s.object<Url62>({
  href: s.string(),
  type: s.string(),
});
