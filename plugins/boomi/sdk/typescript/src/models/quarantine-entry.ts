import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A record held in quarantine due to data quality or matching issues. */
export type QuarantineEntry = {
  /** Unique identifier of the quarantine entry. */
  id?: string;
  /** ID of the source that submitted this record. */
  sourceId?: string;
  /** Reason the record was quarantined. */
  reason?: string;
  /** Field values of the quarantined record. */
  fields?: Record<string, unknown>;
  /** Timestamp when the record entered quarantine. */
  createdDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const quarantineEntrySchema: Schema<QuarantineEntry> = s.object<QuarantineEntry>(
  {
    id: s.optional(s.string()),
    sourceId: s.optional(s.string()),
    reason: s.optional(s.string()),
    fields: s.optional(s.record(s.string(), s.unknown())),
    createdDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
