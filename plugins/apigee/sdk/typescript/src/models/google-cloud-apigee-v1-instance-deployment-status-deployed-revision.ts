import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Revisions deployed in the MPs. */
export type GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision = {
  /** API proxy revision reported as deployed. */
  revision?: string;
  /** Percentage of MP replicas reporting this revision. */
  percentage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1InstanceDeploymentStatusDeployedRevisionSchema: Schema<GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision> =
  s.object<GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision>(
    {
      revision: s.optional(s.string()),
      percentage: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
