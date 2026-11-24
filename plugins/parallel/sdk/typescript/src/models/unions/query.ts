import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Concise query describing the memories to retrieve. Empty queries return the most recent memories.
 */
export type Query = string;

export const queryInternalSchema: Schema<Query> = s.of<Query>(s.union([s.string()]));

export const querySchema: Schema<Query> = s.lazySchema(() =>
  s.of<Query>(s.union([s.string().check(s.maxLength(500))])),
);
