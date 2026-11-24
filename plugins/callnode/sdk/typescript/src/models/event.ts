import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Event = {
  type?: string;
  at?: Date;
  detail?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventSchema: Schema<Event> = s.object<Event>(
  {
    type: s.optional(s.string()),
    at: s.optional(s.dateTime()),
    detail: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
