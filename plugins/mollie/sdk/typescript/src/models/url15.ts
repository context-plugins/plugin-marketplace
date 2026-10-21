import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [mandate](get-mandate). */
export type Url15 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url15Schema: Schema<Url15> = s.object<Url15>({
  href: s.string(),
  type: s.string(),
});
