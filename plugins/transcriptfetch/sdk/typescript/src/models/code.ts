import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Code = {
  Unauthorized: "unauthorized",
  InvalidRequest: "invalid_request",
  InsufficientCredits: "insufficient_credits",
  RateLimited: "rate_limited",
  IdempotencyConflict: "idempotency_conflict",
  UnsupportedPlatform: "unsupported_platform",
  UpstreamUnavailable: "upstream_unavailable",
  InternalError: "internal_error",
  LiveStream: "live_stream",
  WasLive: "was_live",
  NoAudioStream: "no_audio_stream",
  AudioTooLong: "audio_too_long",
  NoSpeech: "no_speech",
  CaptionsDisabled: "captions_disabled",
  NoCaptions: "no_captions",
  AgeRestricted: "age_restricted",
  MembersOnly: "members_only",
  Private: "private",
  Unavailable: "unavailable",
  BotGate: "bot_gate",
  IpBlocked: "ip_blocked",
  RegionBlocked: "region_blocked",
  Timeout: "timeout",
  UpstreamError: "upstream_error",
  ProxyUnavailable: "proxy_unavailable",
  Connection: "connection",
  ParseError: "parse_error",
  InvalidInput: "invalid_input",
  DrmProtected: "drm_protected",
  Unknown: "unknown",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
