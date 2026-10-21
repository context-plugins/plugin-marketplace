import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type To = {
  href?: string;
};

export const toSchema: Schema<To> = s.object<To>({
  href: s.optional(s.string()),
});
