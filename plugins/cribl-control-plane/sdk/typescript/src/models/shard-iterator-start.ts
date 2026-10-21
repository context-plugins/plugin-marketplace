import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Location at which to start reading a shard for the first time */
export const ShardIteratorStart = {
  TrimHorizon: "TRIM_HORIZON",
  Latest: "LATEST",
} as const;
export type ShardIteratorStart = (typeof ShardIteratorStart)[keyof typeof ShardIteratorStart] | (string & {});

export const shardIteratorStartSchema: EnumSchema<ShardIteratorStart> =
  s.enumOf<ShardIteratorStart>(ShardIteratorStart);
