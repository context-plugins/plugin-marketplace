import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DeploymentChangeReportRoutingConflictSchema,
  type GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict,
} from "./google-cloud-apigee-v1-deployment-change-report-routing-conflict.js";
import {
  googleCloudApigeeV1InstanceDeploymentStatusSchema,
  type GoogleCloudApigeeV1InstanceDeploymentStatus,
} from "./google-cloud-apigee-v1-instance-deployment-status.js";
import {
  googleCloudApigeeV1PodStatusSchema,
  type GoogleCloudApigeeV1PodStatus,
} from "./google-cloud-apigee-v1-pod-status.js";
import { googleRpcStatusSchema, type GoogleRpcStatus } from "./google-rpc-status.js";
import { proxyDeploymentTypeSchema, type ProxyDeploymentType } from "./proxy-deployment-type.js";
import { state1Schema, type State1 } from "./state1.js";

/** Deployment represents a deployment of an API proxy or shared flow. */
export type GoogleCloudApigeeV1Deployment = {
  /**
   * Errors reported for this deployment. Populated only when state == ERROR. **Note**: This field
   * is displayed only when viewing deployment status.
   */
  errors?: GoogleRpcStatus[];
  /** Time the API proxy was marked `deployed` in the control plane in millisconds since epoch. */
  deployStartTime?: string;
  /** API proxy revision. */
  revision?: string;
  /** Environment. */
  environment?: string;
  /**
   * Current state of the deployment. **Note**: This field is displayed only when viewing deployment
   * status.
   */
  state?: State1;
  /**
   * Conflicts in the desired state routing configuration. The presence of conflicts does not cause
   * the state to be `ERROR`, but it will mean that some of the deployment's base paths are not
   * routed to its environment. If the conflicts change, the state will transition to `PROGRESSING`
   * until the latest configuration is rolled out to all instances. **Note**: This field is
   * displayed only when viewing deployment status.
   */
  routeConflicts?: GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict[];
  /**
   * Status reported by each runtime instance. **Note**: This field is displayed only when viewing
   * deployment status.
   */
  instances?: GoogleCloudApigeeV1InstanceDeploymentStatus[];
  /**
   * The full resource name of Cloud IAM Service Account that this deployment is using, eg,
   * `projects/-/serviceAccounts/{email}`.
   */
  serviceAccount?: string;
  /** API proxy. */
  apiProxy?: string;
  /**
   * Output only. The type of the deployment (standard or extensible) Deployed proxy revision will
   * be marked as extensible in following 2 cases. 1. The deployed proxy revision uses extensible
   * policies. 2. If a environment supports flowhooks and flow hook is configured.
   */
  proxyDeploymentType?: ProxyDeploymentType;
  /**
   * Status reported by runtime pods. **Note**: **This field is deprecated**. Runtime versions 1.3
   * and above report instance level status rather than pod status.
   */
  pods?: GoogleCloudApigeeV1PodStatus[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeploymentSchema: Schema<GoogleCloudApigeeV1Deployment> =
  s.object<GoogleCloudApigeeV1Deployment>(
    {
      errors: s.optional(s.array(s.lazy(() => googleRpcStatusSchema))),
      deployStartTime: s.optional(s.string()),
      revision: s.optional(s.string()),
      environment: s.optional(s.string()),
      state: s.optional(s.lazy(() => state1Schema)),
      routeConflicts: s.optional(
        s.array(s.lazy(() => googleCloudApigeeV1DeploymentChangeReportRoutingConflictSchema)),
      ),
      instances: s.optional(s.array(s.lazy(() => googleCloudApigeeV1InstanceDeploymentStatusSchema))),
      serviceAccount: s.optional(s.string()),
      apiProxy: s.optional(s.string()),
      proxyDeploymentType: s.optional(s.lazy(() => proxyDeploymentTypeSchema)),
      pods: s.optional(s.array(s.lazy(() => googleCloudApigeeV1PodStatusSchema))),
    },
    { additionalProperties: s.json() },
  );
