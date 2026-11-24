import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Parameters for creating an event. */
export type CreateEventRequest = {
  /** Display name for the event. */
  name: string;
  /** Machine-readable key for SDK tracking calls. */
  key: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createEventRequestSchema: Schema<CreateEventRequest> = s.object<CreateEventRequest>(
  {
    name: s.string(),
    key: s.string(),
  },
  { additionalProperties: s.json() },
);
