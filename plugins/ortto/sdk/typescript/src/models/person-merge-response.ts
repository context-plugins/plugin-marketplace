import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";

export type PersonMergeResponse = {
  people?: Person[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personMergeResponseSchema: Schema<PersonMergeResponse> = s.object<PersonMergeResponse>(
  {
    people: s.optional(s.array(s.lazy(() => personSchema))),
  },
  { additionalProperties: s.json() },
);
