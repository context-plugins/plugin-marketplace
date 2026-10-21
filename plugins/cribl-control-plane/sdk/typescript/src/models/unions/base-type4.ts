import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  redisDeploymentTypeClusterSchema,
  type RedisDeploymentTypeCluster,
} from "../redis-deployment-type-cluster.js";
import {
  redisDeploymentTypeSentinelSchema,
  type RedisDeploymentTypeSentinel,
} from "../redis-deployment-type-sentinel.js";
import {
  redisDeploymentTypeStandaloneSchema,
  type RedisDeploymentTypeStandalone,
} from "../redis-deployment-type-standalone.js";

export type BaseType4 =
  | (RedisDeploymentTypeStandalone & { deploymentType: "standalone" })
  | (RedisDeploymentTypeCluster & { deploymentType: "cluster" })
  | (RedisDeploymentTypeSentinel & { deploymentType: "sentinel" });

export const baseType4Schema: Schema<BaseType4> = s.discriminatedUnion<BaseType4>("deploymentType", {
  standalone: redisDeploymentTypeStandaloneSchema,
  cluster: redisDeploymentTypeClusterSchema,
  sentinel: redisDeploymentTypeSentinelSchema,
});
