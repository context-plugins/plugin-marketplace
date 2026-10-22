import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The URL to the documentation of this endpoint. */
export type Documentation1 = {
  href?: string;
  type?: string;
};

export const documentation1Schema: Schema<Documentation1> = s.object<Documentation1>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
