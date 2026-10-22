import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [chargebacks](list-chargebacks) deducted from this settlement. */
export type Url5 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url5Schema: Schema<Url5> = s.object<Url5>({
  href: s.string(),
  type: s.string(),
});
