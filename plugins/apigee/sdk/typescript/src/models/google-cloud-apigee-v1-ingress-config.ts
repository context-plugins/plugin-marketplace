import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1EnvironmentGroupConfigSchema,
  type GoogleCloudApigeeV1EnvironmentGroupConfig,
} from "./google-cloud-apigee-v1-environment-group-config.js";

export type GoogleCloudApigeeV1IngressConfig = {
  /** Time at which the IngressConfig revision was created. */
  revisionCreateTime?: string;
  /**
   * A unique id for the ingress config that will only change if the organization is deleted and
   * recreated.
   */
  uid?: string;
  /** List of environment groups in the organization. */
  environmentGroups?: GoogleCloudApigeeV1EnvironmentGroupConfig[];
  /** Name of the resource in the following format: `organizations/{org}/deployedIngressConfig`. */
  name?: string;
  /**
   * Revision id that defines the ordering on IngressConfig resources. The higher the revision, the
   * more recently the configuration was deployed.
   */
  revisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1IngressConfigSchema: Schema<GoogleCloudApigeeV1IngressConfig> =
  s.object<GoogleCloudApigeeV1IngressConfig>(
    {
      revisionCreateTime: s.optional(s.string()),
      uid: s.optional(s.string()),
      environmentGroups: s.optional(s.array(s.lazy(() => googleCloudApigeeV1EnvironmentGroupConfigSchema))),
      name: s.optional(s.string()),
      revisionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
