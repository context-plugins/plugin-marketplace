import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Compression level to apply before moving files to final destination */
export const CompressionLevel = {
  BestSpeed: "best_speed",
  Normal: "normal",
  BestCompression: "best_compression",
} as const;
export type CompressionLevel = (typeof CompressionLevel)[keyof typeof CompressionLevel] | (string & {});

export const compressionLevelSchema: EnumSchema<CompressionLevel> =
  s.enumOf<CompressionLevel>(CompressionLevel);
