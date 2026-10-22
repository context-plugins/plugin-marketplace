import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChunkingStrategy = {
  Auto: "auto",
} as const;
export type ChunkingStrategy = (typeof ChunkingStrategy)[keyof typeof ChunkingStrategy] | (string & {});

export const chunkingStrategySchema: EnumSchema<ChunkingStrategy> =
  s.enumOf<ChunkingStrategy>(ChunkingStrategy);
