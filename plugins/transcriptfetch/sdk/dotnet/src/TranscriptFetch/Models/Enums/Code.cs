using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Code>))]
public sealed record Code : OpenStringEnum<Code>
{
    private Code(string value) : base(value)
    {
    }

    public static readonly Code Unauthorized = new("unauthorized");

    public static readonly Code InvalidRequest = new("invalid_request");

    public static readonly Code InsufficientCredits = new("insufficient_credits");

    public static readonly Code RateLimited = new("rate_limited");

    public static readonly Code IdempotencyConflict = new("idempotency_conflict");

    public static readonly Code UnsupportedPlatform = new("unsupported_platform");

    public static readonly Code UpstreamUnavailable = new("upstream_unavailable");

    public static readonly Code InternalError = new("internal_error");

    public static readonly Code LiveStream = new("live_stream");

    public static readonly Code WasLive = new("was_live");

    public static readonly Code NoAudioStream = new("no_audio_stream");

    public static readonly Code AudioTooLong = new("audio_too_long");

    public static readonly Code NoSpeech = new("no_speech");

    public static readonly Code CaptionsDisabled = new("captions_disabled");

    public static readonly Code NoCaptions = new("no_captions");

    public static readonly Code AgeRestricted = new("age_restricted");

    public static readonly Code MembersOnly = new("members_only");

    public static readonly Code Private = new("private");

    public static readonly Code Unavailable = new("unavailable");

    public static readonly Code BotGate = new("bot_gate");

    public static readonly Code IpBlocked = new("ip_blocked");

    public static readonly Code RegionBlocked = new("region_blocked");

    public static readonly Code Timeout = new("timeout");

    public static readonly Code UpstreamError = new("upstream_error");

    public static readonly Code ProxyUnavailable = new("proxy_unavailable");

    public static readonly Code Connection = new("connection");

    public static readonly Code ParseError = new("parse_error");

    public static readonly Code InvalidInput = new("invalid_input");

    public static readonly Code DrmProtected = new("drm_protected");

    public static readonly Code Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onUnauthorized,
        Func<TResult> onInvalidRequest,
        Func<TResult> onInsufficientCredits,
        Func<TResult> onRateLimited,
        Func<TResult> onIdempotencyConflict,
        Func<TResult> onUnsupportedPlatform,
        Func<TResult> onUpstreamUnavailable,
        Func<TResult> onInternalError,
        Func<TResult> onLiveStream,
        Func<TResult> onWasLive,
        Func<TResult> onNoAudioStream,
        Func<TResult> onAudioTooLong,
        Func<TResult> onNoSpeech,
        Func<TResult> onCaptionsDisabled,
        Func<TResult> onNoCaptions,
        Func<TResult> onAgeRestricted,
        Func<TResult> onMembersOnly,
        Func<TResult> onPrivate,
        Func<TResult> onUnavailable,
        Func<TResult> onBotGate,
        Func<TResult> onIpBlocked,
        Func<TResult> onRegionBlocked,
        Func<TResult> onTimeout,
        Func<TResult> onUpstreamError,
        Func<TResult> onProxyUnavailable,
        Func<TResult> onConnection,
        Func<TResult> onParseError,
        Func<TResult> onInvalidInput,
        Func<TResult> onDrmProtected,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unauthorized => onUnauthorized(),
            _ when this == InvalidRequest => onInvalidRequest(),
            _ when this == InsufficientCredits => onInsufficientCredits(),
            _ when this == RateLimited => onRateLimited(),
            _ when this == IdempotencyConflict => onIdempotencyConflict(),
            _ when this == UnsupportedPlatform => onUnsupportedPlatform(),
            _ when this == UpstreamUnavailable => onUpstreamUnavailable(),
            _ when this == InternalError => onInternalError(),
            _ when this == LiveStream => onLiveStream(),
            _ when this == WasLive => onWasLive(),
            _ when this == NoAudioStream => onNoAudioStream(),
            _ when this == AudioTooLong => onAudioTooLong(),
            _ when this == NoSpeech => onNoSpeech(),
            _ when this == CaptionsDisabled => onCaptionsDisabled(),
            _ when this == NoCaptions => onNoCaptions(),
            _ when this == AgeRestricted => onAgeRestricted(),
            _ when this == MembersOnly => onMembersOnly(),
            _ when this == Private => onPrivate(),
            _ when this == Unavailable => onUnavailable(),
            _ when this == BotGate => onBotGate(),
            _ when this == IpBlocked => onIpBlocked(),
            _ when this == RegionBlocked => onRegionBlocked(),
            _ when this == Timeout => onTimeout(),
            _ when this == UpstreamError => onUpstreamError(),
            _ when this == ProxyUnavailable => onProxyUnavailable(),
            _ when this == Connection => onConnection(),
            _ when this == ParseError => onParseError(),
            _ when this == InvalidInput => onInvalidInput(),
            _ when this == DrmProtected => onDrmProtected(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnauthorized,
        Action onInvalidRequest,
        Action onInsufficientCredits,
        Action onRateLimited,
        Action onIdempotencyConflict,
        Action onUnsupportedPlatform,
        Action onUpstreamUnavailable,
        Action onInternalError,
        Action onLiveStream,
        Action onWasLive,
        Action onNoAudioStream,
        Action onAudioTooLong,
        Action onNoSpeech,
        Action onCaptionsDisabled,
        Action onNoCaptions,
        Action onAgeRestricted,
        Action onMembersOnly,
        Action onPrivate,
        Action onUnavailable,
        Action onBotGate,
        Action onIpBlocked,
        Action onRegionBlocked,
        Action onTimeout,
        Action onUpstreamError,
        Action onProxyUnavailable,
        Action onConnection,
        Action onParseError,
        Action onInvalidInput,
        Action onDrmProtected,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Unauthorized) onUnauthorized();
        else if (this == InvalidRequest) onInvalidRequest();
        else if (this == InsufficientCredits) onInsufficientCredits();
        else if (this == RateLimited) onRateLimited();
        else if (this == IdempotencyConflict) onIdempotencyConflict();
        else if (this == UnsupportedPlatform) onUnsupportedPlatform();
        else if (this == UpstreamUnavailable) onUpstreamUnavailable();
        else if (this == InternalError) onInternalError();
        else if (this == LiveStream) onLiveStream();
        else if (this == WasLive) onWasLive();
        else if (this == NoAudioStream) onNoAudioStream();
        else if (this == AudioTooLong) onAudioTooLong();
        else if (this == NoSpeech) onNoSpeech();
        else if (this == CaptionsDisabled) onCaptionsDisabled();
        else if (this == NoCaptions) onNoCaptions();
        else if (this == AgeRestricted) onAgeRestricted();
        else if (this == MembersOnly) onMembersOnly();
        else if (this == Private) onPrivate();
        else if (this == Unavailable) onUnavailable();
        else if (this == BotGate) onBotGate();
        else if (this == IpBlocked) onIpBlocked();
        else if (this == RegionBlocked) onRegionBlocked();
        else if (this == Timeout) onTimeout();
        else if (this == UpstreamError) onUpstreamError();
        else if (this == ProxyUnavailable) onProxyUnavailable();
        else if (this == Connection) onConnection();
        else if (this == ParseError) onParseError();
        else if (this == InvalidInput) onInvalidInput();
        else if (this == DrmProtected) onDrmProtected();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
