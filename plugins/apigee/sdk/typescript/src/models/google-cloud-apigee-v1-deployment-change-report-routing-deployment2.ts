import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Base path/deployment that may start receiving that traffic. May be null if no deployment is able
 * to receive the traffic.
 */
export type GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment2 = {
  /** Name of the deployed API proxy revision containing the base path. */
  revision?: string;
  /** Name of the environment in which the proxy is deployed. */
  environment?: string;
  /** Base path receiving traffic. */
  basepath?: string;
  /** Name of the deployed API proxy revision containing the base path. */
  apiProxy?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeploymentChangeReportRoutingDeployment2Schema: Schema<GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment2> =
  s.object<GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment2>(
    {
      revision: s.optional(s.string()),
      environment: s.optional(s.string()),
      basepath: s.optional(s.string()),
      apiProxy: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
