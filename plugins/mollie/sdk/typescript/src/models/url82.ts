import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [profile](get-profile) this subscription was created for. */
export type Url82 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url82Schema: Schema<Url82> = s.object<Url82>({
  href: s.string(),
  type: s.string(),
});
