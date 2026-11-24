import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Route deployed in the ingress routing table. */
export type GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute = {
  /** Base path in the routing table. */
  basepath?: string;
  /** Percentage of ingress replicas reporting this route. */
  percentage?: number;
  /** Destination environment. This will be empty if the route is not yet reported. */
  environment?: string;
  /** Environment group where this route is installed. */
  envgroup?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1InstanceDeploymentStatusDeployedRouteSchema: Schema<GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute> =
  s.object<GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute>(
    {
      basepath: s.optional(s.string()),
      percentage: s.optional(s.int()),
      environment: s.optional(s.string()),
      envgroup: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
