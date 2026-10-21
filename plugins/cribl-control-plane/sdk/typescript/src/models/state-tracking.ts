import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Settings for tracking collection state between consecutive scheduled executions. */
export type StateTracking = {
  /** Enable tracking of collection progress between consecutive scheduled executions. */
  enabled?: boolean;
};

export const stateTrackingSchema: Schema<StateTracking> = s.object<StateTracking>({
  enabled: s.optional(s.boolean()),
});
