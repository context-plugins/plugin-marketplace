import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The URL to the current set of items. */
export type Url1 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url1Schema: Schema<Url1> = s.object<Url1>({
  href: s.string(),
  type: s.string(),
});
