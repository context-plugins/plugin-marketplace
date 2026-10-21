import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Link = {
  href?: string;
  type?: string;
};

export const linkSchema: Schema<Link> = s.object<Link>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
