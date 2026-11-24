import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Event = {
  id?: string;
  occurredAt?: string;
  kind?: string;
  predicate?: string | null;
  oldValue?: Record<string, unknown>;
  newValue?: Record<string, unknown>;
  source?: string | null;
  summary?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventSchema: Schema<Event> = s.object<Event>(
  {
    id: s.optional(s.string()),
    occurredAt: s.optional(s.string()),
    kind: s.optional(s.string()),
    predicate: s.optionalNullable(s.string()),
    oldValue: s.optional(s.record(s.string(), s.unknown())),
    newValue: s.optional(s.record(s.string(), s.unknown())),
    source: s.optionalNullable(s.string()),
    summary: s.optional(s.string()),
    _keysMap: {
      occurredAt: "occurred_at",
      oldValue: "old_value",
      newValue: "new_value",
    },
  },
  { additionalProperties: s.json() },
);
