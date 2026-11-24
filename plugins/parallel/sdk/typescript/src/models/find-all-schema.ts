import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Generator, generatorSchema } from "./generator.js";
import { matchConditionSchema, type MatchCondition } from "./match-condition.js";
import { enrichmentsSchema, type Enrichments } from "./unions/enrichments.js";
import { matchLimitSchema, type MatchLimit } from "./unions/match-limit.js";

/** Response model for FindAll ingest. */
export type FindAllSchema = {
  /** Natural language objective of the FindAll run. */
  objective: string;
  /** Type of the entity for the FindAll run. */
  entityType: string;
  /** List of match conditions for the FindAll run. */
  matchConditions: MatchCondition[];
  /** List of enrichment inputs for the FindAll run. */
  enrichments?: Enrichments;
  /** The generator of the FindAll run. @default Generator.Core */
  generator?: Generator;
  /** Max number of candidates to evaluate */
  matchLimit?: MatchLimit;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findAllSchemaSchema: Schema<FindAllSchema> = s.object<FindAllSchema>(
  {
    objective: s.string(),
    entityType: s.string(),
    matchConditions: s.array(s.lazy(() => matchConditionSchema)),
    enrichments: s.optional(s.lazy(() => enrichmentsSchema)),
    generator: s.defaulted(generatorSchema, Generator.Core),
    matchLimit: s.optional(s.lazy(() => matchLimitSchema)),
    _keysMap: {
      entityType: "entity_type",
      matchConditions: "match_conditions",
      matchLimit: "match_limit",
    },
  },
  { additionalProperties: s.json() },
);
