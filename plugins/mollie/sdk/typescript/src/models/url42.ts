import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** URL to a downloadable PDF of the invoice. */
export type Url42 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url42Schema: Schema<Url42> = s.object<Url42>({
  href: s.string(),
  type: s.string(),
});
