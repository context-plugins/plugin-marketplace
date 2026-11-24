import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The stats object for Stories */
export type StoryStats = {
  /** The number of documents related to this Story. */
  numRelatedDocuments: number;
};

export const storyStatsSchema: Schema<StoryStats> = s.object<StoryStats>({
  numRelatedDocuments: s.int(),
  _keysMap: {
    numRelatedDocuments: "num_related_documents",
  },
});
