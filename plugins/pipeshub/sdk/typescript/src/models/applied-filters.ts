import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { appliedFilterNodeSchema, type AppliedFilterNode } from "./applied-filter-node.js";

/**
 * Rich filter state selected by the user, used for display and persistence only. This mirrors the
 * active selection shown in the UI and is distinct from the machine-readable `filters` field used
 * for retrieval scoping.
 */
export type AppliedFilters = {
  /** Applied app/connector filter nodes */
  apps?: AppliedFilterNode[];
  /** Applied knowledge-base filter nodes */
  kb?: AppliedFilterNode[];
  /** Applied record-group filter nodes */
  recordGroups?: AppliedFilterNode[];
  /** Applied folder and record filter nodes (each with everything under it) */
  records?: AppliedFilterNode[];
  /** Applied record filter nodes selected alone */
  recordsExact?: AppliedFilterNode[];
};

export const appliedFiltersSchema: Schema<AppliedFilters> = s.object<AppliedFilters>({
  apps: s.optional(s.array(s.lazy(() => appliedFilterNodeSchema))),
  kb: s.optional(s.array(s.lazy(() => appliedFilterNodeSchema))),
  recordGroups: s.optional(s.array(s.lazy(() => appliedFilterNodeSchema))),
  records: s.optional(s.array(s.lazy(() => appliedFilterNodeSchema))),
  recordsExact: s.optional(s.array(s.lazy(() => appliedFilterNodeSchema))),
});
