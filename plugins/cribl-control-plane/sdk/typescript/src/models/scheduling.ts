import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stateTrackingSchema, type StateTracking } from "./state-tracking.js";

/** Internal settings for scheduled execution of this Collector. */
export type Scheduling = {
  /** Settings for tracking collection state between consecutive scheduled executions. */
  stateTracking?: StateTracking;
};

export const schedulingSchema: Schema<Scheduling> = s.object<Scheduling>({
  stateTracking: s.optional(s.lazy(() => stateTrackingSchema)),
});
