import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { branchRepSchema, type BranchRep } from "./branch-rep.js";
import { linkSchema, type Link } from "./link.js";

export type BranchCollectionRep = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** An array of branches */
  items: BranchRep[];
};

export const branchCollectionRepSchema: Schema<BranchCollectionRep> = s.object<BranchCollectionRep>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  items: s.array(s.lazy(() => branchRepSchema)),
  _keysMap: {
    links: "_links",
  },
});
