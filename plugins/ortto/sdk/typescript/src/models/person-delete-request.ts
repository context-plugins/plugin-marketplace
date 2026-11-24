import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { person1Schema, type Person1 } from "./person1.js";

export type PersonDeleteRequest = {
  people?: Person1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personDeleteRequestSchema: Schema<PersonDeleteRequest> = s.object<PersonDeleteRequest>(
  {
    people: s.optional(s.array(s.lazy(() => person1Schema))),
  },
  { additionalProperties: s.json() },
);
