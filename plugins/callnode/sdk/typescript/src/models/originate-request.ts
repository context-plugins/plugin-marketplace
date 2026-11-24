import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { realtimeInternalSchema, realtimeSchema, type Realtime } from "./realtime.js";
import { toInternalSchema, toSchema, type To } from "./unions/to.js";
import { webhookAuthSchema, type WebhookAuth } from "./webhook-auth.js";

/**
 * Three mutually exclusive destination forms: E.164 `to` (PSTN), a `sip:` URI `to` (direct SIP
 * delivery), or `sipTrunkId` + an E.164/extension `to` (BYOC via your saved trunk). Passing
 * `sipTrunkId` together with a `sip:` `to` is rejected with `invalid_request`.
 */
export type OriginateRequest = {
  /**
   * The destination. An E.164 number, a `sip:` URI, or — together with `sipTrunkId` — an E.164
   * number or a 1–64 character extension the trunk's host understands.
   */
  to: To;
  /**
   * ID of a saved SIP trunk (Dashboard → SIP Trunks). Routes the call to the trunk's configured
   * host (BYOC / PBX). Mutually exclusive with a `sip:` `to`.
   */
  sipTrunkId?: string;
  /**
   * Must be a DID owned by your account with status `active`. Required for every destination form —
   * it becomes the caller ID presented to the called party or to your SIP endpoint.
   */
  from: string;
  /**
   * Where your AI agent runs. Overrides the webhook stored on the `from` number. Invoked once when
   * the call connects (`call_started`), then once per turn — for every caller utterance
   * (`user_speech`) and every completed keypad entry (`user_dtmf`, with the digit string in a
   * `dtmf` field) — see the Conversational Webhook guide.
   */
  webhookUrl?: string;
  /** How CallNode authenticates to your webhook endpoint. */
  webhookAuth?: WebhookAuth;
  /**
   * Realtime WebSocket mode for this call (see /docs/realtime): instead of the per-turn webhook,
   * CallNode opens a WebSocket to `url` when the call connects and streams transcripts (and, on
   * request, caller audio) to it; you stream audio back, transfer or hang up. Overrides the
   * from-number's realtime setting. The webhook stays the fallback if the socket cannot be reached.
   * Billed per started minute of socket time on top of the call minute (`realtimePerMinuteRate` on
   * GET /api/plans).
   */
  realtime?: Realtime;
  /** Opaque JSON, echoed back on status webhooks. Max 4 KB. */
  metadata?: Record<string, unknown>;
  /**
   * URL we POST call lifecycle events to (answered, completed, failed). For SIP destinations,
   * `call.failed` events carry the mapped `failureCode` and may also include `sipCause` — the raw
   * hangup cause string (diagnostic passthrough; not enumerated).
   */
  statusWebhookUrl?: string;
  /** Hard cap on call duration. @default 1800 */
  maxDurationSecs?: number;
  /** Bypass the 8am–9pm called-party-local-time check. Audited. @default false */
  tcpaOverride?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const originateRequestProperties: s.Shape<OriginateRequest> = {
  to: toInternalSchema,
  sipTrunkId: s.optional(s.string()),
  from: s.string(),
  webhookUrl: s.optional(s.string()),
  webhookAuth: s.optional(s.lazy(() => webhookAuthSchema)),
  realtime: s.optional(s.lazy(() => realtimeInternalSchema)),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  statusWebhookUrl: s.optional(s.string()),
  maxDurationSecs: s.defaulted(s.int(), 1800),
  tcpaOverride: s.defaulted(s.boolean(), false),
};

export const originateRequestInternalSchema: Schema<OriginateRequest> = s.object<OriginateRequest>(
  originateRequestProperties,
  { additionalProperties: s.json() },
);

export const originateRequestSchema: Schema<OriginateRequest> = s.lazySchema(() =>
  s.object<OriginateRequest>(
    {
      ...originateRequestProperties,
      to: toSchema,
      from: s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$")),
      webhookUrl: s.optional(s.string().check(s.url())),
      realtime: s.optional(s.lazy(() => realtimeSchema)),
      statusWebhookUrl: s.optional(s.string().check(s.url())),
      maxDurationSecs: s.defaulted(s.int().check(s.gte(5), s.lte(7200)), 1800),
    },
    { additionalProperties: s.json() },
  ),
);
