import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The URL to the current resource. */
export type Url65 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url65Schema: Schema<Url65> = s.object<Url65>({
  href: s.string(),
  type: s.string(),
});
