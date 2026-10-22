import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Rule1 = {
  /** JavaScript expression to select events to send to output */
  filter: string;
  /** Output to send matching events to */
  output: string;
  /** Description of this rule's purpose */
  description?: string;
  /** Flag to control whether to stop the event from being checked against other rules */
  final?: boolean;
};

export const rule1Schema: Schema<Rule1> = s.object<Rule1>({
  filter: s.string(),
  output: s.string(),
  description: s.optional(s.string()),
  final: s.optional(s.boolean()),
});
