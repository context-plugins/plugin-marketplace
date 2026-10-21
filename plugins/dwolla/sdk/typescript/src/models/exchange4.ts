import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Exchange4 = {
  href?: string;
};

export const exchange4Schema: Schema<Exchange4> = s.object<Exchange4>({
  href: s.optional(s.string()),
});
