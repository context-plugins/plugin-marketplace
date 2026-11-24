import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deploymentGroupTypeSchema, type DeploymentGroupType } from "./deployment-group-type.js";

/**
 * DeploymentGroupConfig represents a deployment group that should be present in a particular
 * environment.
 */
export type GoogleCloudApigeeV1DeploymentGroupConfig = {
  /** Unique ID. The ID will only change if the deployment group is deleted and recreated. */
  uid?: string;
  /**
   * Revision number which can be used by the runtime to detect if the deployment group has changed
   * between two versions.
   */
  revisionId?: string;
  /**
   * Name of the deployment group in the following format:
   * `organizations/{org}/environments/{env}/deploymentGroups/{group}`.
   */
  name?: string;
  /** Type of the deployment group, which will be either Standard or Extensible. */
  deploymentGroupType?: DeploymentGroupType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeploymentGroupConfigSchema: Schema<GoogleCloudApigeeV1DeploymentGroupConfig> =
  s.object<GoogleCloudApigeeV1DeploymentGroupConfig>(
    {
      uid: s.optional(s.string()),
      revisionId: s.optional(s.string()),
      name: s.optional(s.string()),
      deploymentGroupType: s.optional(s.lazy(() => deploymentGroupTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
