import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  insightWorkflowCondition1Schema,
  type InsightWorkflowCondition1,
} from "./insight-workflow-condition1.js";
import { endDatetimeSchema, type EndDatetime } from "./unions/end-datetime.js";
import { startDatetimeSchema, type StartDatetime } from "./unions/start-datetime.js";

/** Request model to create/update an insight workflow. */
export type InsightWorkflowInput = {
  /** Human-readable name of insight workflow */
  name: string;
  /** Source of the workflow */
  source: string;
  /** Text description of workflow */
  description: string;
  /** Ordered list of IDs of tool configurations to be executed in the workflow */
  insightToolIds: number[];
  /** Conditions (filters) on which a workflow should be triggered. */
  conditions: InsightWorkflowCondition1;
  /**
   * Target session timestamp the workflow (backfill) should start. An empty value indicates start
   * on activation - live sessions only
   */
  startDatetime?: StartDatetime;
  /**
   * Target session timestamp the workflow (backfill) should end. An empty value indicates no end,
   * i.e., include live sessions until deactivation
   */
  endDatetime?: EndDatetime;
};

export const insightWorkflowInputSchema: Schema<InsightWorkflowInput> = s.object<InsightWorkflowInput>({
  name: s.string(),
  source: s.string(),
  description: s.string(),
  insightToolIds: s.array(s.int()),
  conditions: insightWorkflowCondition1Schema,
  startDatetime: s.optional(s.lazy(() => startDatetimeSchema)),
  endDatetime: s.optional(s.lazy(() => endDatetimeSchema)),
  _keysMap: {
    insightToolIds: "insight_tool_ids",
    startDatetime: "start_datetime",
    endDatetime: "end_datetime",
  },
});
