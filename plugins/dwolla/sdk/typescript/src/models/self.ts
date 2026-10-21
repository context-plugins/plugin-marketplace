import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Self = {
  href?: string;
};

export const selfSchema: Schema<Self> = s.object<Self>({
  href: s.optional(s.string()),
});
