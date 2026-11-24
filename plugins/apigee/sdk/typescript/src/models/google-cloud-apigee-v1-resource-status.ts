import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1RevisionStatusSchema,
  type GoogleCloudApigeeV1RevisionStatus,
} from "./google-cloud-apigee-v1-revision-status.js";

/** The status of a resource loaded in the runtime. */
export type GoogleCloudApigeeV1ResourceStatus = {
  /**
   * The resource name. Currently only two resources are supported: EnvironmentGroup -
   * organizations/{org}/envgroups/{envgroup} EnvironmentConfig -
   * organizations/{org}/environments/{environment}/deployedConfig
   */
  resource?: string;
  /**
   * The uid of the resource. In the unexpected case that the instance has multiple uids for the
   * same name, they should be reported under separate ResourceStatuses.
   */
  uid?: string;
  /** Revisions of the resource currently deployed in the instance. */
  revisions?: GoogleCloudApigeeV1RevisionStatus[];
  /** The total number of replicas that should have this resource. */
  totalReplicas?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ResourceStatusSchema: Schema<GoogleCloudApigeeV1ResourceStatus> =
  s.object<GoogleCloudApigeeV1ResourceStatus>(
    {
      resource: s.optional(s.string()),
      uid: s.optional(s.string()),
      revisions: s.optional(s.array(s.lazy(() => googleCloudApigeeV1RevisionStatusSchema))),
      totalReplicas: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
