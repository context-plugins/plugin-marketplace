import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Rule = {
  /** Specify the name of a process or family of processes. */
  procname: string;
  /** Specify a string to substring-match against process command-line. */
  arg?: string;
  /** Choose a config to apply to processes that match the process name and/or argument. */
  config: string;
};

export const ruleSchema: Schema<Rule> = s.object<Rule>({
  procname: s.string(),
  arg: s.optional(s.string()),
  config: s.string(),
});
