import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * User-provided key identifying the memory scope to use. Omit to use personal memory, if available.
 */
export type MemoryScopeKey = string;

export const memoryScopeKeyInternalSchema: Schema<MemoryScopeKey> = s.of<MemoryScopeKey>(
  s.union([s.string()]),
);

export const memoryScopeKeySchema: Schema<MemoryScopeKey> = s.lazySchema(() =>
  s.of<MemoryScopeKey>(
    s.union([s.string().check(s.minLength(1), s.maxLength(128), s.pattern("^[a-zA-Z0-9_-]+$"))]),
  ),
);
