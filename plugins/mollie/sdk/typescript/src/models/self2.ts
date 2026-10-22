import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The URL to this unmatched credit transfer. */
export type Self2 = {
  href?: string;
  type?: string;
};

export const self2Schema: Schema<Self2> = s.object<Self2>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
