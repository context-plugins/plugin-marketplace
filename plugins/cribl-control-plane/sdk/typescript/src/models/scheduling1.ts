import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stateTracking1Schema, type StateTracking1 } from "./state-tracking1.js";

/** Internal settings for scheduled execution of this Collector. */
export type Scheduling1 = {
  /** Settings for tracking collection state between consecutive scheduled executions. */
  stateTracking?: StateTracking1;
};

export const scheduling1Schema: Schema<Scheduling1> = s.object<Scheduling1>({
  stateTracking: s.optional(s.lazy(() => stateTracking1Schema)),
});
