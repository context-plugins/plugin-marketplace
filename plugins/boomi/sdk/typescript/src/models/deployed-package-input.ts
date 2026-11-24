import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Input for deploying a packaged component to an environment. */
export type DeployedPackageInput = {
  /** ID of the target environment. */
  environmentId: string;
  /** ID of the packaged component to deploy. */
  packageId: string;
  /** Optional deployment notes. */
  notes?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deployedPackageInputSchema: Schema<DeployedPackageInput> = s.object<DeployedPackageInput>(
  {
    environmentId: s.string(),
    packageId: s.string(),
    notes: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
