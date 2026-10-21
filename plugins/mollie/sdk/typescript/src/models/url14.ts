import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [customer](get-customer). */
export type Url14 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url14Schema: Schema<Url14> = s.object<Url14>({
  href: s.string(),
  type: s.string(),
});
