import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { computeTypeSchema, type ComputeType } from "./compute-type.js";
import { dockerServerStatusSchema, type DockerServerStatus } from "./docker-server-status.js";

export type DockerServer = {
  /**
   * Information about the compute resources the docker server uses. Available values include:
   * BUILD_GENERAL1_SMALL: Use up to 4 GiB memory and 2 vCPUs for your docker server.
   * BUILD_GENERAL1_MEDIUM: Use up to 8 GiB memory and 4 vCPUs for your docker server.
   * BUILD_GENERAL1_LARGE: Use up to 16 GiB memory and 8 vCPUs for your docker server.
   * BUILD_GENERAL1_XLARGE: Use up to 64 GiB memory and 32 vCPUs for your docker server.
   * BUILD_GENERAL1_2XLARGE: Use up to 128 GiB memory and 64 vCPUs for your docker server.
   */
  computeType: ComputeType;
  /**
   * A list of one or more security groups IDs. Security groups configured for Docker servers should
   * allow ingress network traffic from the VPC configured in the project. They should allow ingress
   * on port 9876.
   */
  securityGroupIds?: string[];
  status?: DockerServerStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dockerServerSchema: Schema<DockerServer> = s.object<DockerServer>(
  {
    computeType: computeTypeSchema,
    securityGroupIds: s.optional(s.array(s.string())),
    status: s.optional(s.lazy(() => dockerServerStatusSchema)),
  },
  { additionalProperties: s.json() },
);
