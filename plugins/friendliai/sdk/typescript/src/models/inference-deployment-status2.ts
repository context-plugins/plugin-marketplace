import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the endpoint deployment. */
export const InferenceDeploymentStatus2 = {
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
export type InferenceDeploymentStatus2 =
  | (typeof InferenceDeploymentStatus2)[keyof typeof InferenceDeploymentStatus2]
  | (string & {});

export const inferenceDeploymentStatus2Schema: EnumSchema<InferenceDeploymentStatus2> =
  s.enumOf<InferenceDeploymentStatus2>(InferenceDeploymentStatus2);
