import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";

export type PeopleSearchResponse = {
  people?: Person[];
  total?: number;
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const peopleSearchResponseSchema: Schema<PeopleSearchResponse> = s.object<PeopleSearchResponse>(
  {
    people: s.optional(s.array(s.lazy(() => personSchema))),
    total: s.optional(s.int()),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
