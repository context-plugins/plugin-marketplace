import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A group of calculated values for this Label. This is not included if the slim? flag is set to
 * true for the List Labels endpoint.
 */
export type LabelStats = {
  /** The total number of Documents associated this Label. */
  numRelatedDocuments: number;
  /** The total number of Epics with this Label. */
  numEpics: number;
  /** The total number of stories unstarted Stories with this Label. */
  numStoriesUnstarted: number;
  /** The total number of Stories with this Label. */
  numStoriesTotal: number;
  /** The number of unstarted epics associated with this label. */
  numEpicsUnstarted: number;
  /** The number of in progress epics associated with this label. */
  numEpicsInProgress: number;
  /** The total number of unstarted points with this Label. */
  numPointsUnstarted: number;
  /** The total number of Stories with no point estimate with this Label. */
  numStoriesUnestimated: number;
  /** The total number of in-progress points with this Label. */
  numPointsInProgress: number;
  /** The total number of Epics associated with this Label. */
  numEpicsTotal: number;
  /** The total number of completed Stories with this Label. */
  numStoriesCompleted: number;
  /** The total number of completed points with this Label. */
  numPointsCompleted: number;
  /** The total number of stories backlog Stories with this Label. */
  numStoriesBacklog: number;
  /** The total number of points with this Label. */
  numPointsTotal: number;
  /** The total number of in-progress Stories with this Label. */
  numStoriesInProgress: number;
  /** The total number of backlog points with this Label. */
  numPointsBacklog: number;
  /** The number of completed Epics associated with this Label. */
  numEpicsCompleted: number;
};

export const labelStatsSchema: Schema<LabelStats> = s.object<LabelStats>({
  numRelatedDocuments: s.int(),
  numEpics: s.int(),
  numStoriesUnstarted: s.int(),
  numStoriesTotal: s.int(),
  numEpicsUnstarted: s.int(),
  numEpicsInProgress: s.int(),
  numPointsUnstarted: s.int(),
  numStoriesUnestimated: s.int(),
  numPointsInProgress: s.int(),
  numEpicsTotal: s.int(),
  numStoriesCompleted: s.int(),
  numPointsCompleted: s.int(),
  numStoriesBacklog: s.int(),
  numPointsTotal: s.int(),
  numStoriesInProgress: s.int(),
  numPointsBacklog: s.int(),
  numEpicsCompleted: s.int(),
  _keysMap: {
    numRelatedDocuments: "num_related_documents",
    numEpics: "num_epics",
    numStoriesUnstarted: "num_stories_unstarted",
    numStoriesTotal: "num_stories_total",
    numEpicsUnstarted: "num_epics_unstarted",
    numEpicsInProgress: "num_epics_in_progress",
    numPointsUnstarted: "num_points_unstarted",
    numStoriesUnestimated: "num_stories_unestimated",
    numPointsInProgress: "num_points_in_progress",
    numEpicsTotal: "num_epics_total",
    numStoriesCompleted: "num_stories_completed",
    numPointsCompleted: "num_points_completed",
    numStoriesBacklog: "num_stories_backlog",
    numPointsTotal: "num_points_total",
    numStoriesInProgress: "num_stories_in_progress",
    numPointsBacklog: "num_points_backlog",
    numEpicsCompleted: "num_epics_completed",
  },
});
