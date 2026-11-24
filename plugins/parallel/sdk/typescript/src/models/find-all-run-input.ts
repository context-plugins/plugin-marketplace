import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { generator2Schema, type Generator2 } from "./generator2.js";
import { matchConditionSchema, type MatchCondition } from "./match-condition.js";
import { excludeListInternalSchema, excludeListSchema, type ExcludeList } from "./unions/exclude-list.js";
import {
  memoryScopeKeyInternalSchema,
  memoryScopeKeySchema,
  type MemoryScopeKey,
} from "./unions/memory-scope-key.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";
import { webhook1Schema, type Webhook1 } from "./unions/webhook1.js";

/** Input model for FindAll run. */
export type FindAllRunInput = {
  /** Natural language objective of the FindAll run. */
  objective: string;
  /** Type of the entity for the FindAll run. */
  entityType: string;
  /** List of match conditions for the FindAll run. */
  matchConditions: MatchCondition[];
  /** Generator for the FindAll run. One of base, core, pro, preview. */
  generator: Generator2;
  /**
   * Maximum number of matches to find for this FindAll run. Must be between 5 and 1000 (inclusive).
   * May return fewer results.
   */
  matchLimit: number;
  /** List of entity names/IDs to exclude from results. At most 10,000 entries are allowed. */
  excludeList?: ExcludeList;
  /** Metadata for the FindAll run. */
  metadata?: Metadata;
  /** Webhook for the FindAll run. */
  webhook?: Webhook1;
  /**
   * User-provided key identifying the memory scope to use. Omit to use personal memory, if
   * available.
   */
  memoryScopeKey?: MemoryScopeKey;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const findAllRunInputProperties: s.Shape<FindAllRunInput> = {
  objective: s.string(),
  entityType: s.string(),
  matchConditions: s.array(s.lazy(() => matchConditionSchema)),
  generator: generator2Schema,
  matchLimit: s.int(),
  excludeList: s.optional(s.lazy(() => excludeListInternalSchema)),
  metadata: s.optional(s.lazy(() => metadataSchema)),
  webhook: s.optional(s.lazy(() => webhook1Schema)),
  memoryScopeKey: s.optional(s.lazy(() => memoryScopeKeyInternalSchema)),
  _keysMap: {
    entityType: "entity_type",
    matchConditions: "match_conditions",
    matchLimit: "match_limit",
    excludeList: "exclude_list",
    memoryScopeKey: "memory_scope_key",
  },
};

export const findAllRunInputInternalSchema: Schema<FindAllRunInput> = s.object<FindAllRunInput>(
  findAllRunInputProperties,
  { additionalProperties: s.json() },
);

export const findAllRunInputSchema: Schema<FindAllRunInput> = s.lazySchema(() =>
  s.object<FindAllRunInput>(
    {
      ...findAllRunInputProperties,
      excludeList: s.optional(s.lazy(() => excludeListSchema)),
      memoryScopeKey: s.optional(s.lazy(() => memoryScopeKeySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
