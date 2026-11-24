import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Meta1 = {
  schemaVersion: string;
  after: number;
  nextCursor: number;
  hasMore: boolean;
  count: number;
  oldestAvailableSequence?: number | null;
  latestAvailableSequence?: number | null;
  retentionDays: number;
  /** @default "sequence_asc" */
  ordering?: "sequence_asc";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const meta1Schema: Schema<Meta1> = s.object<Meta1>(
  {
    schemaVersion: s.string(),
    after: s.int(),
    nextCursor: s.int(),
    hasMore: s.boolean(),
    count: s.int(),
    oldestAvailableSequence: s.optionalNullable(s.int()),
    latestAvailableSequence: s.optionalNullable(s.int()),
    retentionDays: s.int(),
    ordering: s.defaulted(s.literal("sequence_asc"), "sequence_asc"),
    _keysMap: {
      schemaVersion: "schema_version",
      nextCursor: "next_cursor",
      hasMore: "has_more",
      oldestAvailableSequence: "oldest_available_sequence",
      latestAvailableSequence: "latest_available_sequence",
      retentionDays: "retention_days",
    },
  },
  { additionalProperties: s.json() },
);
