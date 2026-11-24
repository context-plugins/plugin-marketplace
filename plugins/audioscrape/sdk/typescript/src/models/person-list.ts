import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { personSummarySchema, type PersonSummary } from "./person-summary.js";

export type PersonList = {
  persons: PersonSummary[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personListSchema: Schema<PersonList> = s.object<PersonList>(
  {
    persons: s.array(s.lazy(() => personSummarySchema)),
    total: s.int(),
  },
  { additionalProperties: s.json() },
);
