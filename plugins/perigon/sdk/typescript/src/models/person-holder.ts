import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** People most strongly associated with the story. */
export type PersonHolder = {
  /** Wikidata identifier for the person. */
  wikidataId?: string | null;
  /** Person name. */
  name?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personHolderSchema: Schema<PersonHolder> = s.object<PersonHolder>(
  {
    wikidataId: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
