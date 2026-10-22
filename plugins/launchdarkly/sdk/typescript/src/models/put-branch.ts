import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { referenceRepSchema, type ReferenceRep } from "./reference-rep.js";

export type PutBranch = {
  /** The branch name */
  name: string;
  /** An ID representing the branch HEAD. For example, a commit SHA. */
  head: string;
  /**
   * An optional ID used to prevent older data from overwriting newer data. If no sequence ID is
   * included, the newly submitted data will always be saved.
   */
  updateSequenceId?: number;
  syncTime: number;
  /** An array of flag references found on the branch */
  references?: ReferenceRep[];
  commitTime?: number;
};

export const putBranchSchema: Schema<PutBranch> = s.object<PutBranch>({
  name: s.string(),
  head: s.string(),
  updateSequenceId: s.optional(s.int()),
  syncTime: s.int(),
  references: s.optional(s.array(s.lazy(() => referenceRepSchema))),
  commitTime: s.optional(s.int()),
});
