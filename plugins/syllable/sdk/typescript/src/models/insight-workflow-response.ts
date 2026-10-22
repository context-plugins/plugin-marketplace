import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insightToolResponseSchema, type InsightToolResponse } from "./insight-tool-response.js";
import {
  insightWorkflowCondition1Schema,
  type InsightWorkflowCondition1,
} from "./insight-workflow-condition1.js";
import {
  insightWorkflowEstimate2Schema,
  type InsightWorkflowEstimate2,
} from "./insight-workflow-estimate2.js";
import { endDatetimeSchema, type EndDatetime } from "./unions/end-datetime.js";
import { failedCountSchema, type FailedCount } from "./unions/failed-count.js";
import { lastFolderUploadAtSchema, type LastFolderUploadAt } from "./unions/last-folder-upload-at.js";
import { queueCountSchema, type QueueCount } from "./unions/queue-count.js";
import { startDatetimeSchema, type StartDatetime } from "./unions/start-datetime.js";

/** Workflow read response with lifecycle findings on every configured tool. */
export type InsightWorkflowResponse = {
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
  /** Internal ID of the insight workflow */
  id: number;
  /** Ordered tool configurations, including model lifecycle findings */
  insightTools: InsightToolResponse[];
  /** Status of the insight workflow */
  status: string;
  /** Estimate of the number of calls that will be processed by the workflow and their cost */
  estimate: InsightWorkflowEstimate2;
  /** Number of calls in the workflow queue (pending or processing) */
  queueCount?: QueueCount;
  /** Number of workflow executions currently in FAILED status */
  failedCount?: FailedCount;
  /** Timestamp at which the insight workflow was created */
  createdAt?: Date;
  /** Timestamp of most recent update to the insight workflow */
  updatedAt?: Date;
  /** Email of user who last updated Insight Workflow */
  lastUpdatedBy: string;
  /**
   * Timestamp of the most recent file upload to any folder associated with this workflow (null for
   * non-upload workflows or until a file has been uploaded)
   */
  lastFolderUploadAt?: LastFolderUploadAt;
};

export const insightWorkflowResponseSchema: Schema<InsightWorkflowResponse> =
  s.object<InsightWorkflowResponse>({
    name: s.string(),
    source: s.string(),
    description: s.string(),
    insightToolIds: s.array(s.int()),
    conditions: insightWorkflowCondition1Schema,
    startDatetime: s.optional(s.lazy(() => startDatetimeSchema)),
    endDatetime: s.optional(s.lazy(() => endDatetimeSchema)),
    id: s.int(),
    insightTools: s.array(s.lazy(() => insightToolResponseSchema)),
    status: s.string(),
    estimate: insightWorkflowEstimate2Schema,
    queueCount: s.optional(s.lazy(() => queueCountSchema)),
    failedCount: s.optional(s.lazy(() => failedCountSchema)),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    lastUpdatedBy: s.string(),
    lastFolderUploadAt: s.optional(s.lazy(() => lastFolderUploadAtSchema)),
    _keysMap: {
      insightToolIds: "insight_tool_ids",
      startDatetime: "start_datetime",
      endDatetime: "end_datetime",
      insightTools: "insight_tools",
      queueCount: "queue_count",
      failedCount: "failed_count",
      createdAt: "created_at",
      updatedAt: "updated_at",
      lastUpdatedBy: "last_updated_by",
      lastFolderUploadAt: "last_folder_upload_at",
    },
  });
