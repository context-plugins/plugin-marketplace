import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ResourceStatusSchema,
  type GoogleCloudApigeeV1ResourceStatus,
} from "./google-cloud-apigee-v1-resource-status.js";

/** Request for ReportInstanceStatus. */
export type GoogleCloudApigeeV1ReportInstanceStatusRequest = {
  /** Status for config resources */
  resources?: GoogleCloudApigeeV1ResourceStatus[];
  /**
   * A unique ID for the instance which is guaranteed to be unique in case the user installs
   * multiple hybrid runtimes with the same instance ID.
   */
  instanceUid?: string;
  /**
   * The time the report was generated in the runtime. Used to prevent an old status from
   * overwriting a newer one. An instance should space out it's status reports so that clock skew
   * does not play a factor.
   */
  reportTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ReportInstanceStatusRequestSchema: Schema<GoogleCloudApigeeV1ReportInstanceStatusRequest> =
  s.object<GoogleCloudApigeeV1ReportInstanceStatusRequest>(
    {
      resources: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ResourceStatusSchema))),
      instanceUid: s.optional(s.string()),
      reportTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
