import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookAuthStatusSchema, type WebhookAuthStatus } from "./webhook-auth-status.js";

/**
 * Realtime WebSocket mode (see /docs/realtime). Null when the number runs the per-turn webhook
 * loop.
 */
export type Realtime1 = {
  /** wss:// endpoint CallNode connects to per call */
  url?: string;
  /**
   * How CallNode authenticates to your webhook. The secret itself is write-only and never returned.
   */
  auth?: WebhookAuthStatus | null;
  /** Voice id used for say frames; null = platform default */
  voice?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const realtime1Properties: s.Shape<Realtime1> = {
  url: s.optional(s.string()),
  auth: s.optionalNullable(s.lazy(() => webhookAuthStatusSchema)),
  voice: s.optionalNullable(s.string()),
};

export const realtime1InternalSchema: Schema<Realtime1> = s.object<Realtime1>(realtime1Properties, {
  additionalProperties: s.json(),
});

export const realtime1Schema: Schema<Realtime1> = s.lazySchema(() =>
  s.object<Realtime1>(
    {
      ...realtime1Properties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
