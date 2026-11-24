import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1InstanceDeploymentStatusDeployedRevisionSchema,
  type GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision,
} from "./google-cloud-apigee-v1-instance-deployment-status-deployed-revision.js";
import {
  googleCloudApigeeV1InstanceDeploymentStatusDeployedRouteSchema,
  type GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute,
} from "./google-cloud-apigee-v1-instance-deployment-status-deployed-route.js";

/** The status of a deployment as reported by a single instance. */
export type GoogleCloudApigeeV1InstanceDeploymentStatus = {
  /** Revisions currently deployed in MPs. */
  deployedRevisions?: GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision[];
  /** ID of the instance reporting the status. */
  instance?: string;
  /**
   * Current routes deployed in the ingress routing table. A route which is missing will appear in
   * `missing_routes`.
   */
  deployedRoutes?: GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1InstanceDeploymentStatusSchema: Schema<GoogleCloudApigeeV1InstanceDeploymentStatus> =
  s.object<GoogleCloudApigeeV1InstanceDeploymentStatus>(
    {
      deployedRevisions: s.optional(
        s.array(s.lazy(() => googleCloudApigeeV1InstanceDeploymentStatusDeployedRevisionSchema)),
      ),
      instance: s.optional(s.string()),
      deployedRoutes: s.optional(
        s.array(s.lazy(() => googleCloudApigeeV1InstanceDeploymentStatusDeployedRouteSchema)),
      ),
    },
    { additionalProperties: s.json() },
  );
