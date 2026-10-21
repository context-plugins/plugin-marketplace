import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Transfer1 = {
  href?: string;
};

export const transfer1Schema: Schema<Transfer1> = s.object<Transfer1>({
  href: s.optional(s.string()),
});
