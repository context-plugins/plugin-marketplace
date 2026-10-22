import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Optional arguments to pass to the tool (supports template strings) */
export type Arguments = Record<string, Record<string, unknown>>;

export const argumentsSchema: Schema<Arguments> = s.of<Arguments>(
  s.union([s.record(s.string(), s.record(s.string(), s.unknown()))]),
);
