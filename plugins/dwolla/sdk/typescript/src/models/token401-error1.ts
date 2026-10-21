import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Token401Error1 = {
  error?: string;
};

export const token401Error1Schema: Schema<Token401Error1> = s.object<Token401Error1>({
  error: s.optional(s.string()),
});
