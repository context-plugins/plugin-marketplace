import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoogleCloudApigeeV1PodStatus = {
  /** Time the deployment status was reported in milliseconds since epoch. */
  deploymentStatusTime?: string;
  /** Name of the pod which is reporting the status. */
  podName?: string;
  /** Version of the application running in the pod. */
  appVersion?: string;
  /** Code associated with the deployment status. */
  statusCode?: string;
  /**
   * Status of the deployment. Valid values include: - `deployed`: Successful. - `error` : Failed. -
   * `pending` : Pod has not yet reported on the deployment.
   */
  deploymentStatus?: string;
  /** Time the pod status was reported in milliseconds since epoch. */
  podStatusTime?: string;
  /**
   * Overall status of the pod (not this specific deployment). Valid values include: - `active`: Up
   * to date. - `stale` : Recently out of date. Pods that have not reported status in a long time
   * are excluded from the output.
   */
  podStatus?: string;
  /** Human-readable message associated with the status code. */
  statusCodeDetails?: string;
  /** Time the proxy was deployed in milliseconds since epoch. */
  deploymentTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1PodStatusSchema: Schema<GoogleCloudApigeeV1PodStatus> =
  s.object<GoogleCloudApigeeV1PodStatus>(
    {
      deploymentStatusTime: s.optional(s.string()),
      podName: s.optional(s.string()),
      appVersion: s.optional(s.string()),
      statusCode: s.optional(s.string()),
      deploymentStatus: s.optional(s.string()),
      podStatusTime: s.optional(s.string()),
      podStatus: s.optional(s.string()),
      statusCodeDetails: s.optional(s.string()),
      deploymentTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
