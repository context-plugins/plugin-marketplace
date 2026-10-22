import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Optional preprocessing step that pipes collected data through an external command before
 * ingestion.
 */
export type PreprocessType = {
  /** Disabled */
  disabled: boolean;
  /** Command to feed the data through (via stdin) and process its output (stdout) */
  command?: string;
  /** Arguments to be added to the custom command */
  args?: string[];
};

export const preprocessTypeSchema: Schema<PreprocessType> = s.object<PreprocessType>({
  disabled: s.boolean(),
  command: s.optional(s.string()),
  args: s.optional(s.array(s.string())),
});
