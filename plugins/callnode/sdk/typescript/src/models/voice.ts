import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { realtime1InternalSchema, realtime1Schema, type Realtime1 } from "./realtime1.js";
import { webhookAuthStatusSchema, type WebhookAuthStatus } from "./webhook-auth-status.js";

export type Voice = {
  webhookUrl?: string | null;
  /**
   * How CallNode authenticates to your webhook. The secret itself is write-only and never returned.
   */
  webhookAuth?: WebhookAuthStatus | null;
  webhookTimeout?: number;
  /** SIP delivery target (BYOC / wholesale). Null when the number runs in webhook mode. */
  sipUri?: string | null;
  /**
   * Whether the sipUri delivery leg offers SRTP (only ever true beside a ;transport=tls address).
   */
  srtp?: boolean;
  /** SIP trunk this number delivers inbound calls to. Null unless trunk delivery is configured. */
  trunkId?: string | null;
  /**
   * Realtime WebSocket mode (see /docs/realtime). Null when the number runs the per-turn webhook
   * loop.
   */
  realtime?: Realtime1 | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const voiceProperties: s.Shape<Voice> = {
  webhookUrl: s.optionalNullable(s.string()),
  webhookAuth: s.optionalNullable(s.lazy(() => webhookAuthStatusSchema)),
  webhookTimeout: s.optional(s.int()),
  sipUri: s.optionalNullable(s.string()),
  srtp: s.optional(s.boolean()),
  trunkId: s.optionalNullable(s.string()),
  realtime: s.optionalNullable(s.lazy(() => realtime1InternalSchema)),
};

export const voiceInternalSchema: Schema<Voice> = s.object<Voice>(voiceProperties, {
  additionalProperties: s.json(),
});

export const voiceSchema: Schema<Voice> = s.lazySchema(() =>
  s.object<Voice>(
    {
      ...voiceProperties,
      webhookUrl: s.optionalNullable(s.string().check(s.url())),
      realtime: s.optionalNullable(s.lazy(() => realtime1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
