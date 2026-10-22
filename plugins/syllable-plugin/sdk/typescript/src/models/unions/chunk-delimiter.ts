import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * String that should be treated as delimiter between intended chunks. (This feature is coming in
 * the future - currently this value will always be treated as None.)
 */
export type ChunkDelimiter = string;

export const chunkDelimiterSchema: Schema<ChunkDelimiter> = s.of<ChunkDelimiter>(s.union([s.string()]));
