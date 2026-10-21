import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inferenceDeploymentStatus2Schema,
  type InferenceDeploymentStatus2,
} from "./inference-deployment-status2.js";
import { errorCodeSchema, type ErrorCode } from "./unions/error-code.js";
import { phase1Schema, type Phase1 } from "./unions/phase1.js";
import { updatedAtSchema, type UpdatedAt } from "./unions/updated-at.js";

/** Dedicated endpoint status. */
export type DedicatedEndpointStatus = {
  /** The current status of the endpoint deployment. */
  status: InferenceDeploymentStatus2;
  /** Error code if deployment failed. */
  errorCode?: ErrorCode;
  /** When the endpoint was created. */
  createdAt: Date;
  /** When the endpoint was last updated. */
  updatedAt?: UpdatedAt;
  /** The current phase of the endpoint. */
  phase?: Phase1;
};

export const dedicatedEndpointStatusSchema: Schema<DedicatedEndpointStatus> =
  s.object<DedicatedEndpointStatus>({
    status: inferenceDeploymentStatus2Schema,
    errorCode: s.optional(s.lazy(() => errorCodeSchema)),
    createdAt: s.dateTime(),
    updatedAt: s.optional(s.lazy(() => updatedAtSchema)),
    phase: s.optional(s.lazy(() => phase1Schema)),
  });
