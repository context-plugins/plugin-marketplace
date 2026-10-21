import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** URL to the API documentation. */
export type Url43 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url43Schema: Schema<Url43> = s.object<Url43>({
  href: s.string(),
  type: s.string(),
});
