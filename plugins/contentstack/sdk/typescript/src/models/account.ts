import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An authenticated connection to an external service for use in automations. */
export type Account = {
  /** Unique identifier of the account connection. */
  uid?: string;
  /** Display name of the account connection. */
  name?: string;
  /** The name of the external service (e.g., Slack, SendGrid). */
  service?: string;
  /** ISO 8601 timestamp when the account connection was created. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountSchema: Schema<Account> = s.object<Account>(
  {
    uid: s.optional(s.string()),
    name: s.optional(s.string()),
    service: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
