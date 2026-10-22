import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** URL to the current invoice resource. */
export type Url41 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url41Schema: Schema<Url41> = s.object<Url41>({
  href: s.string(),
  type: s.string(),
});
