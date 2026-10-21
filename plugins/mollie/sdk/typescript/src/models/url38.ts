import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [payment](get-payment) that this refund belongs to. */
export type Url38 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url38Schema: Schema<Url38> = s.object<Url38>({
  href: s.string(),
  type: s.string(),
});
