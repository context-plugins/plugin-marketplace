import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Code1 = {
  InvalidRequest: "invalid_request",
  InvalidCursor: "invalid_cursor",
  Unauthorized: "unauthorized",
  IdempotencyConflict: "idempotency_conflict",
  NotFound: "not_found",
  InsufficientCredits: "insufficient_credits",
  BatchTooLarge: "batch_too_large",
  RateLimited: "rate_limited",
  UnsupportedPlatform: "unsupported_platform",
  EndpointPlatformMismatch: "endpoint_platform_mismatch",
  PodcastFeedNotFound: "podcast_feed_not_found",
  AudioIneligible: "audio_ineligible",
  InvalidInput: "invalid_input",
  AudioTooLong: "audio_too_long",
  DrmProtected: "drm_protected",
  Private: "private",
  Unavailable: "unavailable",
  MembersOnly: "members_only",
  AgeRestricted: "age_restricted",
  RegionBlocked: "region_blocked",
  LiveStream: "live_stream",
  WasLive: "was_live",
  NoCaptions: "no_captions",
  CaptionsDisabled: "captions_disabled",
  NoSpeech: "no_speech",
  NoAudioStream: "no_audio_stream",
  UpstreamError: "upstream_error",
  Timeout: "timeout",
  Connection: "connection",
  ProxyUnavailable: "proxy_unavailable",
  ParseError: "parse_error",
  UpstreamUnavailable: "upstream_unavailable",
  InternalError: "internal_error",
  Unknown: "unknown",
} as const;
export type Code1 = (typeof Code1)[keyof typeof Code1] | (string & {});

export const code1Schema: EnumSchema<Code1> = s.enumOf<Code1>(Code1);
