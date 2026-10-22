import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metricInputSchema, type MetricInput } from "./metric-input.js";

export type HoldoutPostRequest = {
  /** A human-friendly name for the holdout */
  name?: string;
  /** A key that identifies the holdout */
  key?: string;
  /** Description of the holdout */
  description?: string;
  /** The chosen randomization unit for the holdout base experiment */
  randomizationunit?: string;
  /** The attributes that the holdout iteration's results can be sliced by */
  attributes?: string[];
  /** Audience allocation for the holdout */
  holdoutamount?: string;
  /** The key of the primary metric for this holdout */
  primarymetrickey?: string;
  /** Details on the metrics for this experiment */
  metrics?: MetricInput[];
  /** The key of the flag that the holdout is dependent on */
  prerequisiteflagkey?: string;
  /** Maintainer id */
  maintainerId?: string;
};

export const holdoutPostRequestSchema: Schema<HoldoutPostRequest> = s.object<HoldoutPostRequest>({
  name: s.optional(s.string()),
  key: s.optional(s.string()),
  description: s.optional(s.string()),
  randomizationunit: s.optional(s.string()),
  attributes: s.optional(s.array(s.string())),
  holdoutamount: s.optional(s.string()),
  primarymetrickey: s.optional(s.string()),
  metrics: s.optional(s.array(s.lazy(() => metricInputSchema))),
  prerequisiteflagkey: s.optional(s.string()),
  maintainerId: s.optional(s.string()),
});
