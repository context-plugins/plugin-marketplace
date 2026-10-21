import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GitCountResult = {
  /** Number of files that changed since the specified commit. */
  count: number;
};

export const gitCountResultSchema: Schema<GitCountResult> = s.object<GitCountResult>({
  count: s.int(),
});
