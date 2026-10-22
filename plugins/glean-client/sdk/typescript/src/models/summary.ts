import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Summary = {
  text?: string;
  /** Follow-up prompts based on the summarized doc */
  followUpPrompts?: string[];
};

export const summarySchema: Schema<Summary> = s.object<Summary>({
  text: s.optional(s.string()),
  followUpPrompts: s.optional(s.array(s.string())),
});
