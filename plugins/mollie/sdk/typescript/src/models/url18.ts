import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The API resource URL of the [terminal](get-terminal) this payment was created for. Only present
 * for point-of-sale payments.
 */
export type Url18 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url18Schema: Schema<Url18> = s.object<Url18>({
  href: s.string(),
  type: s.string(),
});
