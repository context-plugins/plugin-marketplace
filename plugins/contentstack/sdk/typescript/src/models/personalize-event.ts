import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A custom event definition for tracking user actions. */
export type PersonalizeEvent = {
  /** Unique identifier of the event. */
  uid?: string;
  /** Display name of the event. */
  name?: string;
  /** Machine-readable event key used in SDK tracking calls. */
  key?: string;
  /** ISO 8601 timestamp when the event was created. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personalizeEventSchema: Schema<PersonalizeEvent> = s.object<PersonalizeEvent>(
  {
    uid: s.optional(s.string()),
    name: s.optional(s.string()),
    key: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
