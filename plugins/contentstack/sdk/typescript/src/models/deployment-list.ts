import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deploymentSchema, type Deployment } from "./deployment.js";

/** A list of deployments. */
export type DeploymentList = {
  /** Array of deployment objects. */
  data?: Deployment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deploymentListSchema: Schema<DeploymentList> = s.object<DeploymentList>(
  {
    data: s.optional(s.array(s.lazy(() => deploymentSchema))),
  },
  { additionalProperties: s.json() },
);
