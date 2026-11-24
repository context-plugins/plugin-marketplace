import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  realtimeCallnodeIoPhoneNumbersApiInternalSchema,
  realtimeCallnodeIoPhoneNumbersApiSchema,
  type RealtimeCallnodeIoPhoneNumbersApi,
} from "./realtime-callnode-io-phone-numbers-api.js";
import {
  webhookAuthCallnodeIoPhoneNumbersApiSchema,
  type WebhookAuthCallnodeIoPhoneNumbersApi,
} from "./webhook-auth-callnode-io-phone-numbers-api.js";

/**
 * Voice configuration — how inbound calls to this number are answered. Three modes: a
 * conversational WEBHOOK agent (webhookUrl set), SIP DELIVERY to a literal endpoint (sipUri set),
 * or SIP DELIVERY to one of your saved trunks (trunkId set). sipUri and trunkId are mutually
 * exclusive — setting one clears the other, and either takes precedence over the webhook. Wholesale
 * numbers must always keep at least one mode — a change that would leave none is rejected with 400.
 */
export type VoiceConfig = {
  /**
   * Invoked when a call connects and once per caller utterance. Empty/null disconnects the webhook.
   */
  webhookUrl?: string | null;
  /**
   * BYOC / wholesale SIP delivery: when set, inbound calls bridge straight to this sip: endpoint
   * and the webhook never runs. Format sip:user@host[:port][;transport=udp|tcp|tls], public hosts
   * only. Null switches the number back to webhook mode (for wholesale numbers, only allowed when a
   * webhookUrl is present).
   */
  sipUri?: string | null;
  /**
   * Encrypt the audio on the sipUri delivery leg (SRTP with SDES key exchange,
   * AES_CM_128_HMAC_SHA1_80 / AES_CM_128_HMAC_SHA1_32; no fallback to plain RTP). Accepted only
   * when sipUri ends in ;transport=tls — otherwise 400. Cleared automatically when the address
   * changes to UDP/TCP or the number switches to trunk delivery. See /docs/sip-trunking#byoc-srtp.
   *
   * @default false
   */
  srtp?: boolean;
  /**
   * Deliver inbound calls to one of your SIP trunks. A trunk with an egress host is dialed at that
   * host; a REGISTRATION trunk is resolved to wherever your PBX is currently registered, at call
   * time — the way to receive DID calls on equipment behind NAT. If the trunk is not registered
   * when a call arrives, the call falls back to the number's webhook agent (if configured). Null
   * clears trunk delivery. Mutually exclusive with sipUri.
   */
  trunkId?: string | null;
  /**
   * Realtime WebSocket mode (see /docs/realtime): CallNode opens a WebSocket to `url` for every
   * call to this number and streams transcripts (and, on request, caller audio); you stream audio
   * back, transfer or hang up. The webhook stays the fallback when the socket cannot be reached.
   * Null turns it off. The auth secret is write-only (reads return valueSet).
   */
  realtime?: RealtimeCallnodeIoPhoneNumbersApi | null;
  /** How CallNode authenticates to your webhook endpoint. */
  webhookAuth?: WebhookAuthCallnodeIoPhoneNumbersApi;
  /** Webhook response timeout in milliseconds. @default 30000 */
  webhookTimeout?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const voiceConfigProperties: s.Shape<VoiceConfig> = {
  webhookUrl: s.optionalNullable(s.string()),
  sipUri: s.optionalNullable(s.string()),
  srtp: s.defaulted(s.boolean(), false),
  trunkId: s.optionalNullable(s.string()),
  realtime: s.optionalNullable(s.lazy(() => realtimeCallnodeIoPhoneNumbersApiInternalSchema)),
  webhookAuth: s.optional(s.lazy(() => webhookAuthCallnodeIoPhoneNumbersApiSchema)),
  webhookTimeout: s.defaulted(s.int(), 30000),
};

export const voiceConfigInternalSchema: Schema<VoiceConfig> = s.object<VoiceConfig>(voiceConfigProperties, {
  additionalProperties: s.json(),
});

export const voiceConfigSchema: Schema<VoiceConfig> = s.lazySchema(() =>
  s.object<VoiceConfig>(
    {
      ...voiceConfigProperties,
      webhookUrl: s.optionalNullable(s.string().check(s.url())),
      realtime: s.optionalNullable(s.lazy(() => realtimeCallnodeIoPhoneNumbersApiSchema)),
      webhookTimeout: s.defaulted(s.int().check(s.gte(1000), s.lte(120000)), 30000),
    },
    { additionalProperties: s.json() },
  ),
);
