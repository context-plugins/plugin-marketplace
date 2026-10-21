import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { savedJobResponseSchema, type SavedJobResponse } from "./saved-job-response.js";

export type CountedSavedJobResponse = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: SavedJobResponse[];
};

export const countedSavedJobResponseSchema: Schema<CountedSavedJobResponse> =
  s.object<CountedSavedJobResponse>({
    count: s.int(),
    items: s.array(s.lazy(() => savedJobResponseSchema)),
  });
