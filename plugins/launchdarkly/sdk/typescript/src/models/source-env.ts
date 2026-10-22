import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SourceEnv = {
  /** The key of the source environment to clone from */
  key?: string;
  /**
   * (Optional) The version number of the source environment to clone from. Used for optimistic
   * locking
   */
  version?: number;
};

export const sourceEnvSchema: Schema<SourceEnv> = s.object<SourceEnv>({
  key: s.optional(s.string()),
  version: s.optional(s.int()),
});
