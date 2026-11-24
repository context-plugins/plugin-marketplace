import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type ApiKeyEvent = {
  event: Event;
  ip?: string | null;
  userAgent?: string | null;
  createdAt: Date;
  /** The API key that performed the action; null = the dashboard. */
  actorKeyId?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiKeyEventSchema: Schema<ApiKeyEvent> = s.object<ApiKeyEvent>(
  {
    event: eventSchema,
    ip: s.optionalNullable(s.string()),
    userAgent: s.optionalNullable(s.string()),
    createdAt: s.dateTime(),
    actorKeyId: s.optionalNullable(s.int()),
    _keysMap: {
      userAgent: "user_agent",
      createdAt: "created_at",
      actorKeyId: "actor_key_id",
    },
  },
  { additionalProperties: s.json() },
);
