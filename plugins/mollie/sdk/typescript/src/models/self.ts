import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The URL to this draft transfer. */
export type Self = {
  href?: string;
  type?: string;
};

export const selfSchema: Schema<Self> = s.object<Self>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
