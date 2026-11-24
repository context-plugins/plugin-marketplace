import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Existing base path/deployment causing the conflict. */
export type GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment4 = {
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

export const googleCloudApigeeV1DeploymentChangeReportRoutingDeployment4Schema: Schema<GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment4> =
  s.object<GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment4>(
    {
      revision: s.optional(s.string()),
      environment: s.optional(s.string()),
      basepath: s.optional(s.string()),
      apiProxy: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
