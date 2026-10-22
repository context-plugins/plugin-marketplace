import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  insightWorkflowEstimate4Schema,
  type InsightWorkflowEstimate4,
} from "./insight-workflow-estimate4.js";

/** Request model to activate an insight workflow. */
export type InsightWorkflowActivate = {
  /** Flag to indicate if the user has acknowledged the estimate */
  isAcknowledged: boolean;
  /** Estimate of the number of calls that will be processed by the workflow */
  estimate: InsightWorkflowEstimate4;
};

export const insightWorkflowActivateSchema: Schema<InsightWorkflowActivate> =
  s.object<InsightWorkflowActivate>({
    isAcknowledged: s.boolean(),
    estimate: insightWorkflowEstimate4Schema,
    _keysMap: {
      isAcknowledged: "is_acknowledged",
    },
  });
