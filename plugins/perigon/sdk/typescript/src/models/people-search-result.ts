import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";

/** Person search result */
export type PeopleSearchResult = {
  status: number;
  numResults: number;
  results: Person[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const peopleSearchResultSchema: Schema<PeopleSearchResult> = s.object<PeopleSearchResult>(
  {
    status: s.int(),
    numResults: s.int(),
    results: s.array(s.lazy(() => personSchema)),
  },
  { additionalProperties: s.json() },
);
