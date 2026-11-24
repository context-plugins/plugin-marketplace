import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1SignalResponse = {
  signal?: string;
  expiresAt?: Date;
  ttl?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1SignalResponseSchema: Schema<V1SignalResponse> = s.object<V1SignalResponse>(
  {
    signal: s.optional(s.string()),
    expiresAt: s.optional(s.dateTime()),
    ttl: s.optional(s.int()),
    _keysMap: {
      expiresAt: "expires_at",
    },
  },
  { additionalProperties: s.json() },
);
