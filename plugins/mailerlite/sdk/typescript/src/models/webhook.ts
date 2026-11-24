import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Webhook = {
  /** Event */
  event?: Record<string, unknown>;
  /** URL for a webhook */
  url?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookSchema: Schema<Webhook> = s.object<Webhook>(
  {
    event: s.optional(s.record(s.string(), s.unknown())),
    url: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
