import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EventSource = {
  name: string;
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventSourceSchema: Schema<EventSource> = s.object<EventSource>(
  {
    name: s.string(),
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
