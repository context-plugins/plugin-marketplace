import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deploymentType2Schema, type DeploymentType2 } from "./deployment-type2.js";
import { sentinelSchema, type Sentinel } from "./sentinel.js";
import {
  tlsOptionsTypeRedisDeploymentTypeClusterSchema,
  type TlsOptionsTypeRedisDeploymentTypeCluster,
} from "./tls-options-type-redis-deployment-type-cluster.js";

export type RedisDeploymentTypeSentinel = {
  /** How the Redis server is configured. Defaults to Standalone */
  deploymentType?: DeploymentType2;
  /** Name of the Redis Sentinel master group to connect to. */
  masterName: string;
  /** List of sentinels to be used */
  rootNodes?: Sentinel[];
  /** Use TLS for connections to this cluster */
  tls?: boolean;
  /** TLS settings for encrypting the connection to Redis. */
  tlsOptions?: TlsOptionsTypeRedisDeploymentTypeCluster;
};

export const redisDeploymentTypeSentinelSchema: Schema<RedisDeploymentTypeSentinel> =
  s.object<RedisDeploymentTypeSentinel>({
    deploymentType: s.optional(s.lazy(() => deploymentType2Schema)),
    masterName: s.string(),
    rootNodes: s.optional(s.array(s.lazy(() => sentinelSchema))),
    tls: s.optional(s.boolean()),
    tlsOptions: s.optional(s.lazy(() => tlsOptionsTypeRedisDeploymentTypeClusterSchema)),
  });
