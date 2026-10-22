import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [payment](get-payment) that belong to this route. */
export type Url6 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url6Schema: Schema<Url6> = s.object<Url6>({
  href: s.string(),
  type: s.string(),
});
