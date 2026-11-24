import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A group of calculated values for this Project. */
export type ProjectStats = {
  /** The total number of stories in this Project. */
  numStories: number;
  /** The total number of points in this Project. */
  numPoints: number;
  /** The total number of documents related to this Project */
  numRelatedDocuments: number;
};

export const projectStatsSchema: Schema<ProjectStats> = s.object<ProjectStats>({
  numStories: s.int(),
  numPoints: s.int(),
  numRelatedDocuments: s.int(),
  _keysMap: {
    numStories: "num_stories",
    numPoints: "num_points",
    numRelatedDocuments: "num_related_documents",
  },
});
