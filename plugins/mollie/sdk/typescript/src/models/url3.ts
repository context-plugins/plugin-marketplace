import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The API resource URL of the [captures](list-captures) included in this settlement. */
export type Url3 = {
  /** The actual URL string. */
  href: string;
  /** The content type of the page or endpoint the URL points to. */
  type: string;
};

export const url3Schema: Schema<Url3> = s.object<Url3>({
  href: s.string(),
  type: s.string(),
});
