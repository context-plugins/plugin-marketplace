import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the methods that are enabled for this profile. */
export type Url47 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url47Schema: Schema<Url47> = s.object<Url47>({
  href: s.string(),
  type: s.string(),
});
