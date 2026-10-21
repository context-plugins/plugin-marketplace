import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Next = {
  href?: string;
};

export const nextSchema: Schema<Next> = s.object<Next>({
  href: s.optional(s.string()),
});
