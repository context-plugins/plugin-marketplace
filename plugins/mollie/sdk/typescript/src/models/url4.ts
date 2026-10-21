import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [refunds](list-refunds) deducted from this settlement. */
export type Url4 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url4Schema: Schema<Url4> = s.object<Url4>({
  href: s.string(),
  type: s.string(),
});
