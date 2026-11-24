import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A group of calculated values for this Iteration. */
export type IterationStats = {
  /** The total number of completed points in this Iteration. */
  numPointsDone: number;
  /** The total number of documents related to an Iteration */
  numRelatedDocuments: number;
  /** The average cycle time (in seconds) of completed stories in this Iteration. */
  averageCycleTime?: number;
  /** The total number of unstarted Stories in this Iteration. */
  numStoriesUnstarted: number;
  /** The total number of started points in this Iteration. */
  numPointsStarted: number;
  /** The total number of unstarted points in this Iteration. */
  numPointsUnstarted: number;
  /** The total number of started Stories in this Iteration. */
  numStoriesStarted: number;
  /** The total number of Stories with no point estimate. */
  numStoriesUnestimated: number;
  /** The total number of backlog Stories in this Iteration. */
  numStoriesBacklog: number;
  /** The average lead time (in seconds) of completed stories in this Iteration. */
  averageLeadTime?: number;
  /** The total number of backlog points in this Iteration. */
  numPointsBacklog: number;
  /** The total number of points in this Iteration. */
  numPoints: number;
  /** The total number of done Stories in this Iteration. */
  numStoriesDone: number;
};

export const iterationStatsSchema: Schema<IterationStats> = s.object<IterationStats>({
  numPointsDone: s.int(),
  numRelatedDocuments: s.int(),
  averageCycleTime: s.optional(s.int()),
  numStoriesUnstarted: s.int(),
  numPointsStarted: s.int(),
  numPointsUnstarted: s.int(),
  numStoriesStarted: s.int(),
  numStoriesUnestimated: s.int(),
  numStoriesBacklog: s.int(),
  averageLeadTime: s.optional(s.int()),
  numPointsBacklog: s.int(),
  numPoints: s.int(),
  numStoriesDone: s.int(),
  _keysMap: {
    numPointsDone: "num_points_done",
    numRelatedDocuments: "num_related_documents",
    averageCycleTime: "average_cycle_time",
    numStoriesUnstarted: "num_stories_unstarted",
    numPointsStarted: "num_points_started",
    numPointsUnstarted: "num_points_unstarted",
    numStoriesStarted: "num_stories_started",
    numStoriesUnestimated: "num_stories_unestimated",
    numStoriesBacklog: "num_stories_backlog",
    averageLeadTime: "average_lead_time",
    numPointsBacklog: "num_points_backlog",
    numPoints: "num_points",
    numStoriesDone: "num_stories_done",
  },
});
