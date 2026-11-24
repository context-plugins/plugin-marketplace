import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A group of calculated values for this Epic. */
export type EpicStats = {
  /** The total number of completed points in this Epic. */
  numPointsDone: number;
  /** The total number of documents associated with this Epic. */
  numRelatedDocuments: number;
  /** The total number of unstarted Stories in this Epic. */
  numStoriesUnstarted: number;
  /** The total number of Stories in this Epic. */
  numStoriesTotal: number;
  /** The date of the last update of a Story in this Epic. */
  lastStoryUpdate: Date | null;
  /** The total number of started points in this Epic. */
  numPointsStarted: number;
  /** The total number of unstarted points in this Epic. */
  numPointsUnstarted: number;
  /** The total number of started Stories in this Epic. */
  numStoriesStarted: number;
  /** The total number of Stories with no point estimate. */
  numStoriesUnestimated: number;
  /** The total number of backlog Stories in this Epic. */
  numStoriesBacklog: number;
  /** The total number of backlog points in this Epic. */
  numPointsBacklog: number;
  /** The total number of points in this Epic. */
  numPoints: number;
  /** The total number of done Stories in this Epic. */
  numStoriesDone: number;
};

export const epicStatsSchema: Schema<EpicStats> = s.object<EpicStats>({
  numPointsDone: s.int(),
  numRelatedDocuments: s.int(),
  numStoriesUnstarted: s.int(),
  numStoriesTotal: s.int(),
  lastStoryUpdate: s.nullable(s.dateTime()),
  numPointsStarted: s.int(),
  numPointsUnstarted: s.int(),
  numStoriesStarted: s.int(),
  numStoriesUnestimated: s.int(),
  numStoriesBacklog: s.int(),
  numPointsBacklog: s.int(),
  numPoints: s.int(),
  numStoriesDone: s.int(),
  _keysMap: {
    numPointsDone: "num_points_done",
    numRelatedDocuments: "num_related_documents",
    numStoriesUnstarted: "num_stories_unstarted",
    numStoriesTotal: "num_stories_total",
    lastStoryUpdate: "last_story_update",
    numPointsStarted: "num_points_started",
    numPointsUnstarted: "num_points_unstarted",
    numStoriesStarted: "num_stories_started",
    numStoriesUnestimated: "num_stories_unestimated",
    numStoriesBacklog: "num_stories_backlog",
    numPointsBacklog: "num_points_backlog",
    numPoints: "num_points",
    numStoriesDone: "num_stories_done",
  },
});
