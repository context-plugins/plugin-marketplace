import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [subscription](get-subscription). */
export type Url16 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url16Schema: Schema<Url16> = s.object<Url16>({
  href: s.string(),
  type: s.string(),
});
