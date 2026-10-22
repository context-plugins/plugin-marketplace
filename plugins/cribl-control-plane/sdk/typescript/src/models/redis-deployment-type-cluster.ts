import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deploymentType1Schema, type DeploymentType1 } from "./deployment-type1.js";
import {
  rootNodeConfRedisDeploymentTypeClusterSchema,
  type RootNodeConfRedisDeploymentTypeCluster,
} from "./root-node-conf-redis-deployment-type-cluster.js";
import { scaleReadsSchema, type ScaleReads } from "./scale-reads.js";
import {
  tlsOptionsTypeRedisDeploymentTypeClusterSchema,
  type TlsOptionsTypeRedisDeploymentTypeCluster,
} from "./tls-options-type-redis-deployment-type-cluster.js";

export type RedisDeploymentTypeCluster = {
  /** How the Redis server is configured. Defaults to Standalone */
  deploymentType?: DeploymentType1;
  /** Root nodes to which the cluster connection should be initiated */
  rootNodes?: RootNodeConfRedisDeploymentTypeCluster[];
  /** Use TLS for connections to this cluster */
  tls?: boolean;
  /** Which nodes read commands should be sent to */
  scaleReads?: ScaleReads;
  /** TLS settings for encrypting the connection to Redis. */
  tlsOptions?: TlsOptionsTypeRedisDeploymentTypeCluster;
};

export const redisDeploymentTypeClusterSchema: Schema<RedisDeploymentTypeCluster> =
  s.object<RedisDeploymentTypeCluster>({
    deploymentType: s.optional(s.lazy(() => deploymentType1Schema)),
    rootNodes: s.optional(s.array(s.lazy(() => rootNodeConfRedisDeploymentTypeClusterSchema))),
    tls: s.optional(s.boolean()),
    scaleReads: s.optional(s.lazy(() => scaleReadsSchema)),
    tlsOptions: s.optional(s.lazy(() => tlsOptionsTypeRedisDeploymentTypeClusterSchema)),
  });
