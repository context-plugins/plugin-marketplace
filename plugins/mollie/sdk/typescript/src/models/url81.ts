import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [customer](get-customer) this subscription was created for. */
export type Url81 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url81Schema: Schema<Url81> = s.object<Url81>({
  href: s.string(),
  type: s.string(),
});
