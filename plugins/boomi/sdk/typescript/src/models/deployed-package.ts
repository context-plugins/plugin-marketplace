import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A packaged component deployed to a specific runtime environment. */
export type DeployedPackage = {
  /** Unique identifier of the deployment. */
  deploymentId?: string;
  /** ID of the environment to which the package is deployed. */
  environmentId?: string;
  /** ID of the deployed packaged component. */
  packageId?: string;
  /** ID of the underlying component. */
  componentId?: string;
  /** Type of the deployed component. */
  componentType?: string;
  /** Timestamp when the package was deployed. */
  deployedDate?: Date;
  /** Whether this deployment is currently active. */
  active?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deployedPackageSchema: Schema<DeployedPackage> = s.object<DeployedPackage>(
  {
    deploymentId: s.optional(s.string()),
    environmentId: s.optional(s.string()),
    packageId: s.optional(s.string()),
    componentId: s.optional(s.string()),
    componentType: s.optional(s.string()),
    deployedDate: s.optional(s.dateTime()),
    active: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
