import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output only. The type of the deployment (standard or extensible) Deployed proxy revision will be
 * marked as extensible in following 2 cases. 1. The deployed proxy revision uses extensible
 * policies. 2. If a environment supports flowhooks and flow hook is configured.
 */
export const ProxyDeploymentType = {
  ProxyDeploymentTypeUnspecified: "PROXY_DEPLOYMENT_TYPE_UNSPECIFIED",
  Standard: "STANDARD",
  Extensible: "EXTENSIBLE",
} as const;
export type ProxyDeploymentType =
  | (typeof ProxyDeploymentType)[keyof typeof ProxyDeploymentType]
  | (string & {});

export const proxyDeploymentTypeSchema: EnumSchema<ProxyDeploymentType> =
  s.enumOf<ProxyDeploymentType>(ProxyDeploymentType);
