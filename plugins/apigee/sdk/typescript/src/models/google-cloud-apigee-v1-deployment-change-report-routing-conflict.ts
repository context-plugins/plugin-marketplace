import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DeploymentChangeReportRoutingDeployment4Schema,
  type GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment4,
} from "./google-cloud-apigee-v1-deployment-change-report-routing-deployment4.js";

/**
 * Describes a routing conflict that may cause a deployment not to receive traffic at some base
 * path.
 */
export type GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict = {
  /** Existing base path/deployment causing the conflict. */
  conflictingDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment4;
  /** Human-readable description of this conflict. */
  description?: string;
  /** Name of the environment group in which this conflict exists. */
  environmentGroup?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeploymentChangeReportRoutingConflictSchema: Schema<GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict> =
  s.object<GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict>(
    {
      conflictingDeployment: s.optional(
        s.lazy(() => googleCloudApigeeV1DeploymentChangeReportRoutingDeployment4Schema),
      ),
      description: s.optional(s.string()),
      environmentGroup: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
