import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { environmentVariableSchema, type EnvironmentVariable } from "./environment-variable.js";

/** Collector configuration */
export type ScriptCollectorConf1 = {
  /** Script to discover what to collect. Should output one task per line in stdout. */
  discoverScript: string;
  /**
   * Script to run to perform data collections. Task passed in as $CRIBL_COLLECT_ARG. Should output
   * results to stdout.
   */
  collectScript: string;
  /** Shell to use to execute scripts. */
  shell?: string;
  /** Environment variables to expose to the discover and collect scripts. */
  envVars?: EnvironmentVariable[];
};

export const scriptCollectorConf1Schema: Schema<ScriptCollectorConf1> = s.object<ScriptCollectorConf1>({
  discoverScript: s.string(),
  collectScript: s.string(),
  shell: s.optional(s.string()),
  envVars: s.optional(s.array(s.lazy(() => environmentVariableSchema))),
});
