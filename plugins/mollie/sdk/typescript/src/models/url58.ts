import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the organization. */
export type Url58 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url58Schema: Schema<Url58> = s.object<Url58>({
  href: s.string(),
  type: s.string(),
});
