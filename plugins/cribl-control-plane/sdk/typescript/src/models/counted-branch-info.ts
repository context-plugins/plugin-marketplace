import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { branchInfoSchema, type BranchInfo } from "./branch-info.js";

export type CountedBranchInfo = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: BranchInfo[];
};

export const countedBranchInfoSchema: Schema<CountedBranchInfo> = s.object<CountedBranchInfo>({
  count: s.int(),
  items: s.array(s.lazy(() => branchInfoSchema)),
});
