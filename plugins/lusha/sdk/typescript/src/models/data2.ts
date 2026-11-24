import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addedBySchema, type AddedBy } from "./added-by.js";

export type Data2 = {
  added?: number;
  alreadyPresent?: number;
  /** IDs that couldn't be resolved. Not an error — the call still returns `200`. */
  invalidIds?: string[];
  /** Where and by whom a row was added to the table. */
  addedBy?: AddedBy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data2Schema: Schema<Data2> = s.object<Data2>(
  {
    added: s.optional(s.int()),
    alreadyPresent: s.optional(s.int()),
    invalidIds: s.optional(s.array(s.string())),
    addedBy: s.optional(s.lazy(() => addedBySchema)),
  },
  { additionalProperties: s.json() },
);
