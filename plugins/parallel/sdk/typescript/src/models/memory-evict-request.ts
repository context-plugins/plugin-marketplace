import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kind3Schema, type Kind3 } from "./kind3.js";
import {
  memoryScopeKeyInternalSchema,
  memoryScopeKeySchema,
  type MemoryScopeKey,
} from "./unions/memory-scope-key.js";

export type MemoryEvictRequest = {
  /**
   * User-provided key identifying the memory scope to use. Omit to use personal memory, if
   * available.
   */
  memoryScopeKey?: MemoryScopeKey;
  /** Kind of source to evict: `task`, `monitor`, or `findall`. */
  kind: Kind3;
  /** ID of the task run, monitor, or FindAll run to evict. */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const memoryEvictRequestProperties: s.Shape<MemoryEvictRequest> = {
  memoryScopeKey: s.optional(s.lazy(() => memoryScopeKeyInternalSchema)),
  kind: kind3Schema,
  id: s.string(),
  _keysMap: {
    memoryScopeKey: "memory_scope_key",
  },
};

export const memoryEvictRequestInternalSchema: Schema<MemoryEvictRequest> = s.object<MemoryEvictRequest>(
  memoryEvictRequestProperties,
  { additionalProperties: s.json() },
);

export const memoryEvictRequestSchema: Schema<MemoryEvictRequest> = s.lazySchema(() =>
  s.object<MemoryEvictRequest>(
    {
      ...memoryEvictRequestProperties,
      memoryScopeKey: s.optional(s.lazy(() => memoryScopeKeySchema)),
      id: s.string().check(s.minLength(1), s.maxLength(128), s.pattern("^[a-zA-Z0-9_-]+$")),
    },
    { additionalProperties: s.json() },
  ),
);
