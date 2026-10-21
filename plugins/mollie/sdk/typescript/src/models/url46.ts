import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the chargebacks that belong to this profile. */
export type Url46 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url46Schema: Schema<Url46> = s.object<Url46>({
  href: s.string(),
  type: s.string(),
});
