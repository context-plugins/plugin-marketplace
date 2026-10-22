import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The URL to the documentation of the current resource. */
export type Url66 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url66Schema: Schema<Url66> = s.object<Url66>({
  href: s.string(),
  type: s.string(),
});
