import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The URL to this action. */
export type Self3 = {
  href?: string;
  type?: string;
};

export const self3Schema: Schema<Self3> = s.object<Self3>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
