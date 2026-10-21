import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { chunkingStrategySchema, type ChunkingStrategy } from "../chunking-strategy.js";
import {
  serverVadChunkingStrategySchema,
  type ServerVadChunkingStrategy,
} from "../server-vad-chunking-strategy.js";

/**
 * Controls how the audio is cut into chunks. When set to `"auto"`, the server first normalizes
 * loudness and then uses voice activity detection (VAD) to choose boundaries. `server_vad` object
 * can be provided to tweak VAD detection parameters manually. If unset, the audio is transcribed as
 * a single block.
 */
export type ChunkingStrategy1 = ChunkingStrategy | ServerVadChunkingStrategy;

export const chunkingStrategy1Schema: Schema<ChunkingStrategy1> = s.of<ChunkingStrategy1>(
  s.union([s.lazy(() => chunkingStrategySchema), s.lazy(() => serverVadChunkingStrategySchema)]),
);
