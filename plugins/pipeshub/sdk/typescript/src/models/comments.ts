import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Comments = {
  /** What was good about the response */
  positive?: string;
  /** What could be improved */
  negative?: string;
  /** Specific suggestions for improvement */
  suggestions?: string;
};

export const commentsSchema: Schema<Comments> = s.object<Comments>({
  positive: s.optional(s.string()),
  negative: s.optional(s.string()),
  suggestions: s.optional(s.string()),
});
