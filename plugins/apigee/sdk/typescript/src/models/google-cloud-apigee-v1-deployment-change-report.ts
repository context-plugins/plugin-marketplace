import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DeploymentChangeReportRoutingChangeSchema,
  type GoogleCloudApigeeV1DeploymentChangeReportRoutingChange,
} from "./google-cloud-apigee-v1-deployment-change-report-routing-change.js";
import {
  googleCloudApigeeV1DeploymentChangeReportRoutingConflictSchema,
  type GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict,
} from "./google-cloud-apigee-v1-deployment-change-report-routing-conflict.js";
import {
  googleRpcPreconditionFailure2Schema,
  type GoogleRpcPreconditionFailure2,
} from "./google-rpc-precondition-failure2.js";

/**
 * Response for GenerateDeployChangeReport and GenerateUndeployChangeReport. This report contains
 * any validation failures that would cause the deployment to be rejected, as well changes and
 * conflicts in routing that may occur due to the new deployment. The existence of a routing warning
 * does not necessarily imply that the deployment request is bad, if the desired state of the
 * deployment request is to effect a routing change. The primary purposes of the routing messages
 * are: 1) To inform users of routing changes that may have an effect on traffic currently being
 * routed to other existing deployments. 2) To warn users if some base path in the proxy will not
 * receive traffic due to an existing deployment having already claimed that base path. The presence
 * of routing conflicts/changes will not cause non-dry-run DeployApiProxy/UndeployApiProxy requests
 * to be rejected.
 */
export type GoogleCloudApigeeV1DeploymentChangeReport = {
  /** All routing changes that may result from a deployment request. */
  routingChanges?: GoogleCloudApigeeV1DeploymentChangeReportRoutingChange[];
  /** All base path conflicts detected for a deployment request. */
  routingConflicts?: GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict[];
  /** Validation errors that would cause the deployment change request to be rejected. */
  validationErrors?: GoogleRpcPreconditionFailure2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeploymentChangeReportSchema: Schema<GoogleCloudApigeeV1DeploymentChangeReport> =
  s.object<GoogleCloudApigeeV1DeploymentChangeReport>(
    {
      routingChanges: s.optional(
        s.array(s.lazy(() => googleCloudApigeeV1DeploymentChangeReportRoutingChangeSchema)),
      ),
      routingConflicts: s.optional(
        s.array(s.lazy(() => googleCloudApigeeV1DeploymentChangeReportRoutingConflictSchema)),
      ),
      validationErrors: s.optional(s.lazy(() => googleRpcPreconditionFailure2Schema)),
    },
    { additionalProperties: s.json() },
  );
