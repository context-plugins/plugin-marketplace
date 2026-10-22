import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Delete samples response. */
export type DeleteSamplesResponse = {
  /** List of sample IDs that were deleted from the dataset. */
  sampleIds: string[];
};

export const deleteSamplesResponseSchema: Schema<DeleteSamplesResponse> = s.object<DeleteSamplesResponse>({
  sampleIds: s.array(s.string()),
});
