import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Person = {
  personId?: string;
  /** e.g. created, updated, or suppressed. */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personSchema: Schema<Person> = s.object<Person>(
  {
    personId: s.optional(s.string()),
    status: s.optional(s.string()),
    _keysMap: {
      personId: "person_id",
    },
  },
  { additionalProperties: s.json() },
);
