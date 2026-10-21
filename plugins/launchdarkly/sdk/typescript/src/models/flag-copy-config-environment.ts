import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlagCopyConfigEnvironment = {
  /** The environment key */
  key: string;
  /**
   * Optional flag version. If you include this, the operation only succeeds if the current flag
   * version in the environment matches this version.
   */
  currentVersion?: number;
};

export const flagCopyConfigEnvironmentSchema: Schema<FlagCopyConfigEnvironment> =
  s.object<FlagCopyConfigEnvironment>({
    key: s.string(),
    currentVersion: s.optional(s.int()),
  });
