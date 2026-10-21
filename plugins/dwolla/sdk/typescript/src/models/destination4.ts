import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Destination4 = {
  href?: string;
};

export const destination4Schema: Schema<Destination4> = s.object<Destination4>({
  href: s.optional(s.string()),
});
