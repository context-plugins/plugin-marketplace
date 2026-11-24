import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Sports = {
  events: number;
  /** The last instant this venue and sport was read (ISO-8601 Z); null when not known. */
  lastSeen?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sportsSchema: Schema<Sports> = s.object<Sports>(
  {
    events: s.int(),
    lastSeen: s.optionalNullable(s.string()),
    _keysMap: {
      lastSeen: "last_seen",
    },
  },
  { additionalProperties: s.json() },
);
