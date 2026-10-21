import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The URL the invoice is available at, if generated. */
export type Url68 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url68Schema: Schema<Url68> = s.object<Url68>({
  href: s.string(),
  type: s.string(),
});
