import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kind5Schema, type Kind5 } from "./unions/kind5.js";
import {
  memoryScopeKeyInternalSchema,
  memoryScopeKeySchema,
  type MemoryScopeKey,
} from "./unions/memory-scope-key.js";
import { queryInternalSchema, querySchema, type Query } from "./unions/query.js";
import { sinceSchema, type Since } from "./unions/since.js";

export type MemoryRetrieveRequest = {
  /**
   * Concise query describing the memories to retrieve. Empty queries return the most recent
   * memories.
   */
  query?: Query;
  /** Maximum number of memories to return. @default 10 */
  limit?: number;
  /** Filter memories by kind: `task`, `monitor`, or `findall`. */
  kind?: Kind5;
  /**
   * Only return memories sourced from task, monitor, or FindAll runs completed at or after this RFC
   * 3339 timestamp.
   */
  since?: Since;
  /**
   * User-provided key identifying the memory scope to use. Omit to use personal memory, if
   * available.
   */
  memoryScopeKey?: MemoryScopeKey;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const memoryRetrieveRequestProperties: s.Shape<MemoryRetrieveRequest> = {
  query: s.optional(s.lazy(() => queryInternalSchema)),
  limit: s.defaulted(s.int(), 10),
  kind: s.optional(s.lazy(() => kind5Schema)),
  since: s.optional(s.lazy(() => sinceSchema)),
  memoryScopeKey: s.optional(s.lazy(() => memoryScopeKeyInternalSchema)),
  _keysMap: {
    memoryScopeKey: "memory_scope_key",
  },
};

export const memoryRetrieveRequestInternalSchema: Schema<MemoryRetrieveRequest> =
  s.object<MemoryRetrieveRequest>(memoryRetrieveRequestProperties, { additionalProperties: s.json() });

export const memoryRetrieveRequestSchema: Schema<MemoryRetrieveRequest> = s.lazySchema(() =>
  s.object<MemoryRetrieveRequest>(
    {
      ...memoryRetrieveRequestProperties,
      query: s.optional(s.lazy(() => querySchema)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(25)), 10),
      memoryScopeKey: s.optional(s.lazy(() => memoryScopeKeySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
