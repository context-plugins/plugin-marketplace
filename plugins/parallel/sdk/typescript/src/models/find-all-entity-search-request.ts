import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entityTypeSchema, type EntityType } from "./entity-type.js";

export type FindAllEntitySearchRequest = {
  /** Type of entity to search for. */
  entityType: EntityType;
  /** Natural language description of target entities. */
  objective: string;
  /**
   * Maximum number of entities to return. Must be between 5 and 1000 (inclusive). May return fewer
   * results. Defaults to 100.
   *
   * @default 100
   */
  matchLimit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const findAllEntitySearchRequestProperties: s.Shape<FindAllEntitySearchRequest> = {
  entityType: entityTypeSchema,
  objective: s.string(),
  matchLimit: s.defaulted(s.int(), 100),
  _keysMap: {
    entityType: "entity_type",
    matchLimit: "match_limit",
  },
};

export const findAllEntitySearchRequestInternalSchema: Schema<FindAllEntitySearchRequest> =
  s.object<FindAllEntitySearchRequest>(findAllEntitySearchRequestProperties, {
    additionalProperties: s.json(),
  });

export const findAllEntitySearchRequestSchema: Schema<FindAllEntitySearchRequest> = s.lazySchema(() =>
  s.object<FindAllEntitySearchRequest>(
    {
      ...findAllEntitySearchRequestProperties,
      matchLimit: s.defaulted(s.int().check(s.gte(5), s.lte(1000)), 100),
    },
    { additionalProperties: s.json() },
  ),
);
