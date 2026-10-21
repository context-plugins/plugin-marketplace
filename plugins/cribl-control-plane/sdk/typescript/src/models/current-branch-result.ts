import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CurrentBranchResult = {
  /** Name of the Git branch that the Cribl configuration is currently checked out to. */
  branch: string;
};

export const currentBranchResultSchema: Schema<CurrentBranchResult> = s.object<CurrentBranchResult>({
  branch: s.string(),
});
