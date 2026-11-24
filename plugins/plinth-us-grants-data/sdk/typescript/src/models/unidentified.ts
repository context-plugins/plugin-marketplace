import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dollarsSchema, type Dollars } from "./unions/dollars.js";
import { grantsSchema, type Grants } from "./unions/grants.js";
import { noteSchema, type Note } from "./unions/note.js";
import { unavailable1Schema, type Unavailable1 } from "./unions/unavailable1.js";

/** Grants held OUT of a recipient ranking because their recipient is not an organization. */
export type Unidentified = {
  grants?: Grants;
  dollars?: Dollars;
  note?: Note;
  /** Present only when the size could not be computed. The ranking above is unaffected. */
  unavailable?: Unavailable1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unidentifiedSchema: Schema<Unidentified> = s.object<Unidentified>(
  {
    grants: s.optional(s.lazy(() => grantsSchema)),
    dollars: s.optional(s.lazy(() => dollarsSchema)),
    note: s.optional(s.lazy(() => noteSchema)),
    unavailable: s.optional(s.lazy(() => unavailable1Schema)),
  },
  { additionalProperties: s.json() },
);
