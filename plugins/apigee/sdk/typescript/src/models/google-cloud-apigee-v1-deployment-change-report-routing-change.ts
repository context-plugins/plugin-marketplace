import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DeploymentChangeReportRoutingDeployment2Schema,
  type GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment2,
} from "./google-cloud-apigee-v1-deployment-change-report-routing-deployment2.js";
import {
  googleCloudApigeeV1DeploymentChangeReportRoutingDeployment3Schema,
  type GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment3,
} from "./google-cloud-apigee-v1-deployment-change-report-routing-deployment3.js";

/** Describes a potential routing change that may occur as a result of some deployment operation. */
export type GoogleCloudApigeeV1DeploymentChangeReportRoutingChange = {
  /**
   * Base path/deployment that may start receiving that traffic. May be null if no deployment is
   * able to receive the traffic.
   */
  toDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment2;
  /** Human-readable description of this routing change. */
  description?: string;
  /**
   * Set to `true` if using sequenced rollout would make this routing change safer. **Note**: This
   * does not necessarily imply that automated sequenced rollout mode is supported for the
   * operation.
   */
  shouldSequenceRollout?: boolean;
  /** Name of the environment group affected by this routing change. */
  environmentGroup?: string;
  /** Base path/deployment that may stop receiving some traffic. */
  fromDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeploymentChangeReportRoutingChangeSchema: Schema<GoogleCloudApigeeV1DeploymentChangeReportRoutingChange> =
  s.object<GoogleCloudApigeeV1DeploymentChangeReportRoutingChange>(
    {
      toDeployment: s.optional(
        s.lazy(() => googleCloudApigeeV1DeploymentChangeReportRoutingDeployment2Schema),
      ),
      description: s.optional(s.string()),
      shouldSequenceRollout: s.optional(s.boolean()),
      environmentGroup: s.optional(s.string()),
      fromDeployment: s.optional(
        s.lazy(() => googleCloudApigeeV1DeploymentChangeReportRoutingDeployment3Schema),
      ),
    },
    { additionalProperties: s.json() },
  );
