import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Settings for tracking collection state between consecutive scheduled executions. */
export type StateTracking1 = {
  /** Track collection progress between consecutive scheduled executions */
  enabled?: boolean;
};

export const stateTracking1Schema: Schema<StateTracking1> = s.object<StateTracking1>({
  enabled: s.optional(s.boolean()),
});
