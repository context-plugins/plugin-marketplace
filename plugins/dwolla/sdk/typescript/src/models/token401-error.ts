import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Token401Error = {
  error?: string;
};

export const token401ErrorSchema: Schema<Token401Error> = s.object<Token401Error>({
  error: s.optional(s.string()),
});
