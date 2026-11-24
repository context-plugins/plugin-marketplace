import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entry2Schema, type Entry2 } from "./entry2.js";

/** A paginated list of entries. */
export type EntryList2 = {
  /** Array of entry objects. */
  entries?: Entry2[];
  /** Total number of entries. */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entryList2Schema: Schema<EntryList2> = s.object<EntryList2>(
  {
    entries: s.optional(s.array(s.lazy(() => entry2Schema))),
    count: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
