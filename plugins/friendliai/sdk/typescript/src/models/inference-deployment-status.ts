import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of inference deployment. */
export const InferenceDeploymentStatus = {
  Unknown: "UNKNOWN",
  Initializing: "INITIALIZING",
  Running: "RUNNING",
  Updating: "UPDATING",
  Sleeping: "SLEEPING",
  Awaking: "AWAKING",
  Failed: "FAILED",
  Stopping: "STOPPING",
  Terminating: "TERMINATING",
  Terminated: "TERMINATED",
  Ready: "READY",
} as const;
export type InferenceDeploymentStatus =
  | (typeof InferenceDeploymentStatus)[keyof typeof InferenceDeploymentStatus]
  | (string & {});

export const inferenceDeploymentStatusSchema: EnumSchema<InferenceDeploymentStatus> =
  s.enumOf<InferenceDeploymentStatus>(InferenceDeploymentStatus);
