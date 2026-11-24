import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the deployment. */
export const StatusContentstackLaunchDeploymentsApi = {
  Queued: "queued",
  Building: "building",
  Deploying: "deploying",
  Live: "live",
  Failed: "failed",
  Cancelled: "cancelled",
} as const;
export type StatusContentstackLaunchDeploymentsApi =
  | (typeof StatusContentstackLaunchDeploymentsApi)[keyof typeof StatusContentstackLaunchDeploymentsApi]
  | (string & {});

export const statusContentstackLaunchDeploymentsApiSchema: EnumSchema<StatusContentstackLaunchDeploymentsApi> =
  s.enumOf<StatusContentstackLaunchDeploymentsApi>(StatusContentstackLaunchDeploymentsApi);
