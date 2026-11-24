import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  memoryScopeKeyInternalSchema,
  memoryScopeKeySchema,
  type MemoryScopeKey,
} from "./unions/memory-scope-key.js";

export type MemoryClearRequest = {
  /**
   * User-provided key identifying the memory scope to use. Omit to use personal memory, if
   * available.
   */
  memoryScopeKey?: MemoryScopeKey;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const memoryClearRequestProperties: s.Shape<MemoryClearRequest> = {
  memoryScopeKey: s.optional(s.lazy(() => memoryScopeKeyInternalSchema)),
  _keysMap: {
    memoryScopeKey: "memory_scope_key",
  },
};

export const memoryClearRequestInternalSchema: Schema<MemoryClearRequest> = s.object<MemoryClearRequest>(
  memoryClearRequestProperties,
  { additionalProperties: s.json() },
);

export const memoryClearRequestSchema: Schema<MemoryClearRequest> = s.lazySchema(() =>
  s.object<MemoryClearRequest>(
    {
      ...memoryClearRequestProperties,
      memoryScopeKey: s.optional(s.lazy(() => memoryScopeKeySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
