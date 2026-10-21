import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [payment](get-payment) that this capture belongs to. */
export type Url36 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url36Schema: Schema<Url36> = s.object<Url36>({
  href: s.string(),
  type: s.string(),
});
