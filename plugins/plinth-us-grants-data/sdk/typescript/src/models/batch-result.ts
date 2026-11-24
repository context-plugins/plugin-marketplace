import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { candidatesSchema, type Candidates } from "./unions/candidates.js";
import { einSchema, type Ein } from "./unions/ein.js";
import { nameSchema, type Name } from "./unions/name.js";
import { noteSchema, type Note } from "./unions/note.js";
import { yearSchema, type Year } from "./unions/year.js";

export type BatchResult = {
  /**
   * Index of the request row this answers. Results are in request order, but a client should key on
   * this rather than on position.
   */
  i: number;
  /** The EIN the row resolved to, when it did. */
  ein?: Ein;
  /** The organization's name, when the row resolved. */
  name?: Name;
  field: string;
  year?: Year;
  /**
   * The answer. Null whenever `status` is not `ok`, and sometimes when it is (a filer with no
   * revenue line).
   */
  value?: Record<string, unknown>;
  /**
   * ok · not_found · unresolved · ambiguous · upgrade · capped · unknown_field · invalid · error.
   * Anything but `ok` has a `note`.
   */
  status: string;
  note?: Note;
  /** On `ambiguous`: the organizations the name matched, each with ein, name and state. */
  candidates?: Candidates;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchResultSchema: Schema<BatchResult> = s.object<BatchResult>(
  {
    i: s.int(),
    ein: s.optional(s.lazy(() => einSchema)),
    name: s.optional(s.lazy(() => nameSchema)),
    field: s.string(),
    year: s.optional(s.lazy(() => yearSchema)),
    value: s.optional(s.record(s.string(), s.unknown())),
    status: s.string(),
    note: s.optional(s.lazy(() => noteSchema)),
    candidates: s.optional(s.lazy(() => candidatesSchema)),
  },
  { additionalProperties: s.json() },
);
