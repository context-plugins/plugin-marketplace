import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. Deployment type supported by the environment. The deployment type can be set when
 * creating the environment and cannot be changed. When you enable archive deployment, you will be
 * **prevented from performing** a [subset of
 * actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the
 * environment, including: * Managing the deployment of API proxy or shared flow revisions *
 * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers
 */
export const DeploymentType = {
  DeploymentTypeUnspecified: "DEPLOYMENT_TYPE_UNSPECIFIED",
  Proxy: "PROXY",
  Archive: "ARCHIVE",
} as const;
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType] | (string & {});

export const deploymentTypeSchema: EnumSchema<DeploymentType> = s.enumOf<DeploymentType>(DeploymentType);
