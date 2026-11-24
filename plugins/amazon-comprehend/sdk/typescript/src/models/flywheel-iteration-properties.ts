import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  flywheelModelEvaluationMetricsSchema,
  type FlywheelModelEvaluationMetrics,
} from "./flywheel-model-evaluation-metrics.js";
import { status5Schema, type Status5 } from "./status5.js";

export type FlywheelIterationProperties = {
  flywheelArn?: string;
  flywheelIterationId?: string;
  /** The creation start time of the flywheel iteration. */
  creationTime?: Date;
  /** The completion time of this flywheel iteration. */
  endTime?: Date;
  /** The status of the flywheel iteration. */
  status?: Status5;
  /** A description of the status of the flywheel iteration. */
  message?: string;
  /** The ARN of the evaluated model associated with this flywheel iteration. */
  evaluatedModelArn?: string;
  evaluatedModelMetrics?: FlywheelModelEvaluationMetrics;
  /** The ARN of the trained model associated with this flywheel iteration. */
  trainedModelArn?: string;
  trainedModelMetrics?: FlywheelModelEvaluationMetrics;
  evaluationManifestS3Prefix?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const flywheelIterationPropertiesSchema: Schema<FlywheelIterationProperties> =
  s.object<FlywheelIterationProperties>(
    {
      flywheelArn: s.optional(s.string()),
      flywheelIterationId: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      endTime: s.optional(s.dateTime()),
      status: s.optional(s.lazy(() => status5Schema)),
      message: s.optional(s.string()),
      evaluatedModelArn: s.optional(s.string()),
      evaluatedModelMetrics: s.optional(s.lazy(() => flywheelModelEvaluationMetricsSchema)),
      trainedModelArn: s.optional(s.string()),
      trainedModelMetrics: s.optional(s.lazy(() => flywheelModelEvaluationMetricsSchema)),
      evaluationManifestS3Prefix: s.optional(s.string()),
      _keysMap: {
        flywheelArn: "FlywheelArn",
        flywheelIterationId: "FlywheelIterationId",
        creationTime: "CreationTime",
        endTime: "EndTime",
        status: "Status",
        message: "Message",
        evaluatedModelArn: "EvaluatedModelArn",
        evaluatedModelMetrics: "EvaluatedModelMetrics",
        trainedModelArn: "TrainedModelArn",
        trainedModelMetrics: "TrainedModelMetrics",
        evaluationManifestS3Prefix: "EvaluationManifestS3Prefix",
      },
    },
    { additionalProperties: s.json() },
  );
