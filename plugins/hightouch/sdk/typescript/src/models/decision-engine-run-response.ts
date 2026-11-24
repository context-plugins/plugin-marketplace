import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DecisionEngineRunResponse = {
  /** Number of flows that were enqueued for execution */
  flowsEnqueued: number;
};

export const decisionEngineRunResponseSchema: Schema<DecisionEngineRunResponse> =
  s.object<DecisionEngineRunResponse>({
    flowsEnqueued: s.float64(),
  });
