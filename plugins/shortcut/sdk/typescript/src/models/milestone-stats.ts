import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A group of calculated values for this Milestone. */
export type MilestoneStats = {
  /** The average cycle time (in seconds) of completed stories in this Milestone. */
  averageCycleTime?: number;
  /** The average lead time (in seconds) of completed stories in this Milestone. */
  averageLeadTime?: number;
  /** The number of related documents to this Milestone. */
  numRelatedDocuments: number;
};

export const milestoneStatsSchema: Schema<MilestoneStats> = s.object<MilestoneStats>({
  averageCycleTime: s.optional(s.int()),
  averageLeadTime: s.optional(s.int()),
  numRelatedDocuments: s.int(),
  _keysMap: {
    averageCycleTime: "average_cycle_time",
    averageLeadTime: "average_lead_time",
    numRelatedDocuments: "num_related_documents",
  },
});
