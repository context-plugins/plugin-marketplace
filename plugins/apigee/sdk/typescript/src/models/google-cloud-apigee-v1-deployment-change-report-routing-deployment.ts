import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Tuple representing a base path and the deployment containing it. */
export type GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment = {
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

export const googleCloudApigeeV1DeploymentChangeReportRoutingDeploymentSchema: Schema<GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment> =
  s.object<GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment>(
    {
      revision: s.optional(s.string()),
      environment: s.optional(s.string()),
      basepath: s.optional(s.string()),
      apiProxy: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
