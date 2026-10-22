import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Source1 = {
  href?: string;
};

export const source1Schema: Schema<Source1> = s.object<Source1>({
  href: s.optional(s.string()),
});
