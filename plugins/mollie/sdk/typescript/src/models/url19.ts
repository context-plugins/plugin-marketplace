import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Link to customer-facing page showing the status of the bank transfer (to verify if the
 * transaction was successful).
 */
export type Url19 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url19Schema: Schema<Url19> = s.object<Url19>({
  href: s.string(),
  type: s.string(),
});
