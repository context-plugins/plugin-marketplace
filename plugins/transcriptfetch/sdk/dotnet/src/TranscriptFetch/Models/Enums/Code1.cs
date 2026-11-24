using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Code1>))]
public sealed record Code1 : OpenStringEnum<Code1>
{
    private Code1(string value) : base(value)
    {
    }

    public static readonly Code1 InvalidRequest = new("invalid_request");

    public static readonly Code1 InvalidCursor = new("invalid_cursor");

    public static readonly Code1 Unauthorized = new("unauthorized");

    public static readonly Code1 IdempotencyConflict = new("idempotency_conflict");

    public static readonly Code1 NotFound = new("not_found");

    public static readonly Code1 InsufficientCredits = new("insufficient_credits");

    public static readonly Code1 BatchTooLarge = new("batch_too_large");

    public static readonly Code1 RateLimited = new("rate_limited");

    public static readonly Code1 UnsupportedPlatform = new("unsupported_platform");

    public static readonly Code1 EndpointPlatformMismatch = new("endpoint_platform_mismatch");

    public static readonly Code1 PodcastFeedNotFound = new("podcast_feed_not_found");

    public static readonly Code1 AudioIneligible = new("audio_ineligible");

    public static readonly Code1 InvalidInput = new("invalid_input");

    public static readonly Code1 AudioTooLong = new("audio_too_long");

    public static readonly Code1 DrmProtected = new("drm_protected");

    public static readonly Code1 Private = new("private");

    public static readonly Code1 Unavailable = new("unavailable");

    public static readonly Code1 MembersOnly = new("members_only");

    public static readonly Code1 AgeRestricted = new("age_restricted");

    public static readonly Code1 RegionBlocked = new("region_blocked");

    public static readonly Code1 LiveStream = new("live_stream");

    public static readonly Code1 WasLive = new("was_live");

    public static readonly Code1 NoCaptions = new("no_captions");

    public static readonly Code1 CaptionsDisabled = new("captions_disabled");

    public static readonly Code1 NoSpeech = new("no_speech");

    public static readonly Code1 NoAudioStream = new("no_audio_stream");

    public static readonly Code1 UpstreamError = new("upstream_error");

    public static readonly Code1 Timeout = new("timeout");

    public static readonly Code1 Connection = new("connection");

    public static readonly Code1 ProxyUnavailable = new("proxy_unavailable");

    public static readonly Code1 ParseError = new("parse_error");

    public static readonly Code1 UpstreamUnavailable = new("upstream_unavailable");

    public static readonly Code1 InternalError = new("internal_error");

    public static readonly Code1 Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onInvalidRequest,
        Func<TResult> onInvalidCursor,
        Func<TResult> onUnauthorized,
        Func<TResult> onIdempotencyConflict,
        Func<TResult> onNotFound,
        Func<TResult> onInsufficientCredits,
        Func<TResult> onBatchTooLarge,
        Func<TResult> onRateLimited,
        Func<TResult> onUnsupportedPlatform,
        Func<TResult> onEndpointPlatformMismatch,
        Func<TResult> onPodcastFeedNotFound,
        Func<TResult> onAudioIneligible,
        Func<TResult> onInvalidInput,
        Func<TResult> onAudioTooLong,
        Func<TResult> onDrmProtected,
        Func<TResult> onPrivate,
        Func<TResult> onUnavailable,
        Func<TResult> onMembersOnly,
        Func<TResult> onAgeRestricted,
        Func<TResult> onRegionBlocked,
        Func<TResult> onLiveStream,
        Func<TResult> onWasLive,
        Func<TResult> onNoCaptions,
        Func<TResult> onCaptionsDisabled,
        Func<TResult> onNoSpeech,
        Func<TResult> onNoAudioStream,
        Func<TResult> onUpstreamError,
        Func<TResult> onTimeout,
        Func<TResult> onConnection,
        Func<TResult> onProxyUnavailable,
        Func<TResult> onParseError,
        Func<TResult> onUpstreamUnavailable,
        Func<TResult> onInternalError,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InvalidRequest => onInvalidRequest(),
            _ when this == InvalidCursor => onInvalidCursor(),
            _ when this == Unauthorized => onUnauthorized(),
            _ when this == IdempotencyConflict => onIdempotencyConflict(),
            _ when this == NotFound => onNotFound(),
            _ when this == InsufficientCredits => onInsufficientCredits(),
            _ when this == BatchTooLarge => onBatchTooLarge(),
            _ when this == RateLimited => onRateLimited(),
            _ when this == UnsupportedPlatform => onUnsupportedPlatform(),
            _ when this == EndpointPlatformMismatch => onEndpointPlatformMismatch(),
            _ when this == PodcastFeedNotFound => onPodcastFeedNotFound(),
            _ when this == AudioIneligible => onAudioIneligible(),
            _ when this == InvalidInput => onInvalidInput(),
            _ when this == AudioTooLong => onAudioTooLong(),
            _ when this == DrmProtected => onDrmProtected(),
            _ when this == Private => onPrivate(),
            _ when this == Unavailable => onUnavailable(),
            _ when this == MembersOnly => onMembersOnly(),
            _ when this == AgeRestricted => onAgeRestricted(),
            _ when this == RegionBlocked => onRegionBlocked(),
            _ when this == LiveStream => onLiveStream(),
            _ when this == WasLive => onWasLive(),
            _ when this == NoCaptions => onNoCaptions(),
            _ when this == CaptionsDisabled => onCaptionsDisabled(),
            _ when this == NoSpeech => onNoSpeech(),
            _ when this == NoAudioStream => onNoAudioStream(),
            _ when this == UpstreamError => onUpstreamError(),
            _ when this == Timeout => onTimeout(),
            _ when this == Connection => onConnection(),
            _ when this == ProxyUnavailable => onProxyUnavailable(),
            _ when this == ParseError => onParseError(),
            _ when this == UpstreamUnavailable => onUpstreamUnavailable(),
            _ when this == InternalError => onInternalError(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onInvalidRequest,
        Action onInvalidCursor,
        Action onUnauthorized,
        Action onIdempotencyConflict,
        Action onNotFound,
        Action onInsufficientCredits,
        Action onBatchTooLarge,
        Action onRateLimited,
        Action onUnsupportedPlatform,
        Action onEndpointPlatformMismatch,
        Action onPodcastFeedNotFound,
        Action onAudioIneligible,
        Action onInvalidInput,
        Action onAudioTooLong,
        Action onDrmProtected,
        Action onPrivate,
        Action onUnavailable,
        Action onMembersOnly,
        Action onAgeRestricted,
        Action onRegionBlocked,
        Action onLiveStream,
        Action onWasLive,
        Action onNoCaptions,
        Action onCaptionsDisabled,
        Action onNoSpeech,
        Action onNoAudioStream,
        Action onUpstreamError,
        Action onTimeout,
        Action onConnection,
        Action onProxyUnavailable,
        Action onParseError,
        Action onUpstreamUnavailable,
        Action onInternalError,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == InvalidRequest) onInvalidRequest();
        else if (this == InvalidCursor) onInvalidCursor();
        else if (this == Unauthorized) onUnauthorized();
        else if (this == IdempotencyConflict) onIdempotencyConflict();
        else if (this == NotFound) onNotFound();
        else if (this == InsufficientCredits) onInsufficientCredits();
        else if (this == BatchTooLarge) onBatchTooLarge();
        else if (this == RateLimited) onRateLimited();
        else if (this == UnsupportedPlatform) onUnsupportedPlatform();
        else if (this == EndpointPlatformMismatch) onEndpointPlatformMismatch();
        else if (this == PodcastFeedNotFound) onPodcastFeedNotFound();
        else if (this == AudioIneligible) onAudioIneligible();
        else if (this == InvalidInput) onInvalidInput();
        else if (this == AudioTooLong) onAudioTooLong();
        else if (this == DrmProtected) onDrmProtected();
        else if (this == Private) onPrivate();
        else if (this == Unavailable) onUnavailable();
        else if (this == MembersOnly) onMembersOnly();
        else if (this == AgeRestricted) onAgeRestricted();
        else if (this == RegionBlocked) onRegionBlocked();
        else if (this == LiveStream) onLiveStream();
        else if (this == WasLive) onWasLive();
        else if (this == NoCaptions) onNoCaptions();
        else if (this == CaptionsDisabled) onCaptionsDisabled();
        else if (this == NoSpeech) onNoSpeech();
        else if (this == NoAudioStream) onNoAudioStream();
        else if (this == UpstreamError) onUpstreamError();
        else if (this == Timeout) onTimeout();
        else if (this == Connection) onConnection();
        else if (this == ProxyUnavailable) onProxyUnavailable();
        else if (this == ParseError) onParseError();
        else if (this == UpstreamUnavailable) onUpstreamUnavailable();
        else if (this == InternalError) onInternalError();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
