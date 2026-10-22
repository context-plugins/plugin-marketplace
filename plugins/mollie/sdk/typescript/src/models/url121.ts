import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The URL that can be used to have new organizations sign up and be automatically linked to this
 * partner. Will be omitted if the partner is not of type `signuplink`.
 */
export type Url121 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url121Schema: Schema<Url121> = s.object<Url121>({
  href: s.string(),
  type: s.string(),
});
