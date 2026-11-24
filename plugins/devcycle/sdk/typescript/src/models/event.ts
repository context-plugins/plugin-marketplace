import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Event = {
  /** Custom event type */
  type: string;
  /** Custom event target / subject of event. Contextual to event type */
  target?: string;
  /** Unix epoch time the event occurred according to client */
  date?: number;
  /** Value for numerical events. Contextual to event type */
  value?: number;
  /** Extra JSON metadata for event. Contextual to event type */
  metaData?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventSchema: Schema<Event> = s.object<Event>(
  {
    type: s.string(),
    target: s.optional(s.string()),
    date: s.optional(s.float64()),
    value: s.optional(s.float64()),
    metaData: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
