import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionConfSchemaTee = {
  /** Command to execute and feed events to, via stdin. One JSON-formatted event per line. */
  command?: string;
  /** Command-line arguments to pass to the command. */
  args?: string[];
  /** Restart the process if it exits and/or we fail to write to it */
  restartOnExit?: boolean;
  /** Environment variables to overwrite or set */
  env?: Record<string, string>;
};

export const functionConfSchemaTeeSchema: Schema<FunctionConfSchemaTee> = s.object<FunctionConfSchemaTee>({
  command: s.optional(s.string()),
  args: s.optional(s.array(s.string())),
  restartOnExit: s.optional(s.boolean()),
  env: s.optional(s.record(s.string(), s.string())),
});
