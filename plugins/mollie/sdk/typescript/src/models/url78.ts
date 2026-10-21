import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A link to the profile resource that the terminal will be paired with. */
export type Url78 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url78Schema: Schema<Url78> = s.object<Url78>({
  href: s.string(),
  type: s.string(),
});
