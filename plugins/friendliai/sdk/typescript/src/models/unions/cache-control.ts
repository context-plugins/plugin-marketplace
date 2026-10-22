import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Compatibility field accepted for request portability. Parsed but not used for generation. */
export type CacheControl = Record<string, unknown>;

export const cacheControlSchema: Schema<CacheControl> = s.of<CacheControl>(
  s.union([s.record(s.string(), s.unknown())]),
);
