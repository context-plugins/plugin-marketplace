import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Goal = {
  id: number;
  hostId: number;
  name: string;
  path?: string;
  operator?: string;
  eventName?: string;
  scrollDepth?: number;
  createdAt?: Date;
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalSchema: Schema<Goal> = s.object<Goal>(
  {
    id: s.int(),
    hostId: s.int(),
    name: s.string(),
    path: s.optional(s.string()),
    operator: s.optional(s.string()),
    eventName: s.optional(s.string()),
    scrollDepth: s.optional(s.int()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      hostId: "host_id",
      eventName: "event_name",
      scrollDepth: "scroll_depth",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
