import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Meta = {
  schemaVersion?: string;
  requestedAfter?: number;
  oldestAvailableCursor?: number;
  oldestAvailableSequence?: number;
  latestAvailableSequence?: number | null;
  retentionDays?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaSchema: Schema<Meta> = s.object<Meta>(
  {
    schemaVersion: s.optional(s.string()),
    requestedAfter: s.optional(s.int()),
    oldestAvailableCursor: s.optional(s.int()),
    oldestAvailableSequence: s.optional(s.int()),
    latestAvailableSequence: s.optionalNullable(s.int()),
    retentionDays: s.optional(s.int()),
    _keysMap: {
      schemaVersion: "schema_version",
      requestedAfter: "requested_after",
      oldestAvailableCursor: "oldest_available_cursor",
      oldestAvailableSequence: "oldest_available_sequence",
      latestAvailableSequence: "latest_available_sequence",
      retentionDays: "retention_days",
    },
  },
  { additionalProperties: s.json() },
);
