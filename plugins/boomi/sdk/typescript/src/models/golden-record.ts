import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceSchema, type Source } from "./source.js";

/**
 * The authoritative master record that results from matching and merging source records across
 * contributing systems.
 */
export type GoldenRecord = {
  /** Unique identifier of the golden record. */
  id?: string;
  /** Field values of the golden record, keyed by field name. */
  fields?: Record<string, unknown>;
  /** Source records that contribute to this golden record. */
  sources?: Source[];
  /** Timestamp when the golden record was created. */
  createdDate?: Date;
  /** Timestamp when the golden record was last updated. */
  updatedDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goldenRecordSchema: Schema<GoldenRecord> = s.object<GoldenRecord>(
  {
    id: s.optional(s.string()),
    fields: s.optional(s.record(s.string(), s.unknown())),
    sources: s.optional(s.array(s.lazy(() => sourceSchema))),
    createdDate: s.optional(s.dateTime()),
    updatedDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
