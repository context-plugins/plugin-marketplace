import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [customer](get-customer) that this mandate belongs to. */
export type Url79 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url79Schema: Schema<Url79> = s.object<Url79>({
  href: s.string(),
  type: s.string(),
});
