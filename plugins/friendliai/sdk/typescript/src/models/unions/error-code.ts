import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  inferenceDeploymentErrorCodeSchema,
  type InferenceDeploymentErrorCode,
} from "../inference-deployment-error-code.js";

/** Error code if deployment failed. */
export type ErrorCode = InferenceDeploymentErrorCode;

export const errorCodeSchema: Schema<ErrorCode> = s.of<ErrorCode>(
  s.union([s.lazy(() => inferenceDeploymentErrorCodeSchema)]),
);
