import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The load-balancing algorithm to use for spreading out shards across Workers and Worker Processes
 */
export const ShardLoadBalancing = {
  ConsistentHashing: "ConsistentHashing",
  RoundRobin: "RoundRobin",
} as const;
export type ShardLoadBalancing = (typeof ShardLoadBalancing)[keyof typeof ShardLoadBalancing] | (string & {});

export const shardLoadBalancingSchema: EnumSchema<ShardLoadBalancing> =
  s.enumOf<ShardLoadBalancing>(ShardLoadBalancing);
