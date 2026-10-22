import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the entity that this event belongs to. */
export type Url77 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url77Schema: Schema<Url77> = s.object<Url77>({
  href: s.string(),
  type: s.string(),
});
