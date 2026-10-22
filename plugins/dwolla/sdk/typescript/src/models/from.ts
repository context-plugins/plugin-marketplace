import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type From = {
  href?: string;
};

export const fromSchema: Schema<From> = s.object<From>({
  href: s.optional(s.string()),
});
