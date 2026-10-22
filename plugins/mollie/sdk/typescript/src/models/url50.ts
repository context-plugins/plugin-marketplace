import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The hosted checkout preview URL. You need to be logged in to access this page. */
export type Url50 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url50Schema: Schema<Url50> = s.object<Url50>({
  href: s.string(),
  type: s.string(),
});
