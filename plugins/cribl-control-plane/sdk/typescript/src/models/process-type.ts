import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  setConfInputSystemMetricsSchema,
  type SetConfInputSystemMetrics,
} from "./set-conf-input-system-metrics.js";

/** Process metric collection settings. */
export type ProcessType = {
  /** Configure sets to collect process metrics */
  sets?: SetConfInputSystemMetrics[];
};

export const processTypeSchema: Schema<ProcessType> = s.object<ProcessType>({
  sets: s.optional(s.array(s.lazy(() => setConfInputSystemMetricsSchema))),
});
