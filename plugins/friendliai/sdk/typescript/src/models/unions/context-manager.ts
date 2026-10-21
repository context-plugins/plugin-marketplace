import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Compatibility field accepted for request portability. Parsed but not used for generation. */
export type ContextManager = Record<string, unknown>;

export const contextManagerSchema: Schema<ContextManager> = s.of<ContextManager>(
  s.union([s.record(s.string(), s.unknown())]),
);
