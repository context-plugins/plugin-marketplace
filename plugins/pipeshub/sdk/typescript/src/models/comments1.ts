import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Free-text comments grouped by sentiment. */
export type Comments1 = {
  /** What was good about the response. */
  positive?: string;
  /** What could be improved. */
  negative?: string;
};

export const comments1Schema: Schema<Comments1> = s.object<Comments1>({
  positive: s.optional(s.string()),
  negative: s.optional(s.string()),
});
