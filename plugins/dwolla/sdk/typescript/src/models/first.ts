import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type First = {
  href?: string;
};

export const firstSchema: Schema<First> = s.object<First>({
  href: s.optional(s.string()),
});
