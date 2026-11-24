import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookAuthSchema, type WebhookAuth } from "./webhook-auth.js";

/**
 * Realtime WebSocket mode for this call (see /docs/realtime): instead of the per-turn webhook,
 * CallNode opens a WebSocket to `url` when the call connects and streams transcripts (and, on
 * request, caller audio) to it; you stream audio back, transfer or hang up. Overrides the
 * from-number's realtime setting. The webhook stays the fallback if the socket cannot be reached.
 * Billed per started minute of socket time on top of the call minute (`realtimePerMinuteRate` on
 * GET /api/plans).
 */
export type Realtime = {
  /** wss:// URL on a public host. */
  url: string;
  /** How CallNode authenticates to your webhook endpoint. */
  auth?: WebhookAuth;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const realtimeProperties: s.Shape<Realtime> = {
  url: s.string(),
  auth: s.optional(s.lazy(() => webhookAuthSchema)),
};

export const realtimeInternalSchema: Schema<Realtime> = s.object<Realtime>(realtimeProperties, {
  additionalProperties: s.json(),
});

export const realtimeSchema: Schema<Realtime> = s.lazySchema(() =>
  s.object<Realtime>(
    {
      ...realtimeProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
