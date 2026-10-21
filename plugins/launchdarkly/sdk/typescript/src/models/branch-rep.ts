import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { referenceRepSchema, type ReferenceRep } from "./reference-rep.js";

export type BranchRep = {
  /** The branch name */
  name: string;
  /** An ID representing the branch HEAD. For example, a commit SHA. */
  head: string;
  /** An optional ID used to prevent older data from overwriting newer data */
  updateSequenceId?: number;
  syncTime: number;
  /** An array of flag references found on the branch */
  references?: ReferenceRep[];
  /** The location and content type of related resources */
  links: Record<string, Record<string, unknown>>;
};

export const branchRepSchema: Schema<BranchRep> = s.object<BranchRep>({
  name: s.string(),
  head: s.string(),
  updateSequenceId: s.optional(s.int()),
  syncTime: s.int(),
  references: s.optional(s.array(s.lazy(() => referenceRepSchema))),
  links: s.record(s.string(), s.record(s.string(), s.unknown())),
  _keysMap: {
    links: "_links",
  },
});
