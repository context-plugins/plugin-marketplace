import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** People associated with the story and their article counts. */
export type PersonCount = {
  /** Wikidata identifier for the person. */
  wikidataId?: string | null;
  /** Person name. */
  name?: string | null;
  /** Number of story articles mentioning the person. */
  count?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personCountSchema: Schema<PersonCount> = s.object<PersonCount>(
  {
    wikidataId: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    count: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
