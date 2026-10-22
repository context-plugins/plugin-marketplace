import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EnvironmentVariable = {
  /** Environment variable name */
  name: string;
  /**
   * JavaScript expression to compute environment variable's value, enclosed in quotes or backticks.
   * (Can evaluate to a constant.)
   */
  value: string;
};

export const environmentVariableSchema: Schema<EnvironmentVariable> = s.object<EnvironmentVariable>({
  name: s.string(),
  value: s.string(),
});
