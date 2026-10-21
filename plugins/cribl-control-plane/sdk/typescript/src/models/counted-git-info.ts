import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gitInfoSchema, type GitInfo } from "./git-info.js";

export type CountedGitInfo = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: GitInfo[];
};

export const countedGitInfoSchema: Schema<CountedGitInfo> = s.object<CountedGitInfo>({
  count: s.int(),
  items: s.array(s.lazy(() => gitInfoSchema)),
});
