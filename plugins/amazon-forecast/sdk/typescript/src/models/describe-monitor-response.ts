import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { baselineSchema, type Baseline } from "./baseline.js";

export type DescribeMonitorResponse = {
  /** The name of the monitor. */
  monitorName?: string;
  /** The Amazon Resource Name (ARN) of the monitor resource described. */
  monitorArn?: string;
  /** The Amazon Resource Name (ARN) of the auto predictor being monitored. */
  resourceArn?: string;
  /** The status of the monitor resource. */
  status?: string;
  /** The timestamp of the latest evaluation completed by the monitor. */
  lastEvaluationTime?: Date;
  /** The state of the monitor's latest evaluation. */
  lastEvaluationState?: string;
  baseline?: Baseline;
  /** An error message, if any, for the monitor. */
  message?: string;
  /** The timestamp for when the monitor resource was created. */
  creationTime?: Date;
  /** The timestamp of the latest modification to the monitor. */
  lastModificationTime?: Date;
  /**
   * The estimated number of minutes remaining before the monitor resource finishes its current
   * evaluation.
   */
  estimatedEvaluationTimeRemainingInMinutes?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeMonitorResponseSchema: Schema<DescribeMonitorResponse> =
  s.object<DescribeMonitorResponse>(
    {
      monitorName: s.optional(s.string()),
      monitorArn: s.optional(s.string()),
      resourceArn: s.optional(s.string()),
      status: s.optional(s.string()),
      lastEvaluationTime: s.optional(s.dateTime()),
      lastEvaluationState: s.optional(s.string()),
      baseline: s.optional(s.lazy(() => baselineSchema)),
      message: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModificationTime: s.optional(s.dateTime()),
      estimatedEvaluationTimeRemainingInMinutes: s.optional(s.int()),
      _keysMap: {
        monitorName: "MonitorName",
        monitorArn: "MonitorArn",
        resourceArn: "ResourceArn",
        status: "Status",
        lastEvaluationTime: "LastEvaluationTime",
        lastEvaluationState: "LastEvaluationState",
        baseline: "Baseline",
        message: "Message",
        creationTime: "CreationTime",
        lastModificationTime: "LastModificationTime",
        estimatedEvaluationTimeRemainingInMinutes: "EstimatedEvaluationTimeRemainingInMinutes",
      },
    },
    { additionalProperties: s.json() },
  );
