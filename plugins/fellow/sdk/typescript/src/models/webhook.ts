import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** API model for webhook representation in the developer API. */
export type Webhook = {
  id?: string;
  url?: string;
  description?: string;
  status?: string;
  scope?: string;
  enabledEvents?: string[];
  createdAt?: Date | null;
  updatedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookSchema: Schema<Webhook> = s.object<Webhook>(
  {
    id: s.optional(s.string()),
    url: s.optional(s.string()),
    description: s.optional(s.string()),
    status: s.optional(s.string()),
    scope: s.optional(s.string()),
    enabledEvents: s.optional(s.array(s.string())),
    createdAt: s.optionalNullable(s.dateTime()),
    updatedAt: s.optionalNullable(s.dateTime()),
    _keysMap: {
      enabledEvents: "enabled_events",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
