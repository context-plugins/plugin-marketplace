import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * If known, a deep link to the Mollie dashboard of the client, where the requirement can be
 * fulfilled. For example, where necessary documents are to be uploaded.
 */
export type Url59 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url59Schema: Schema<Url59> = s.object<Url59>({
  href: s.string(),
  type: s.string(),
});
