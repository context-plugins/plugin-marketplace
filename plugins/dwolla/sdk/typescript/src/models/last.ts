import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Last = {
  href?: string;
};

export const lastSchema: Schema<Last> = s.object<Last>({
  href: s.optional(s.string()),
});
