import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [payments](list-payments) included in this settlement. */
export type Url2 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url2Schema: Schema<Url2> = s.object<Url2>({
  href: s.string(),
  type: s.string(),
});
