using System;
using System.Text.Json.Serialization;
using Statable.Core.Enum;

namespace Statable.Models.Enums;

/// <summary>
/// Stable machine-readable slug (contract — never changes). The <c>ambiguous_domain</c> code is emitted only by the MCP tools (when a <c>site</c> domain matches more than one stored site), not by /query.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code>))]
public sealed record Code : OpenStringEnum<Code>
{
    private Code(string value) : base(value)
    {
    }

    public static readonly Code InvalidRequest = new("invalid_request");

    public static readonly Code MetricsRequired = new("metrics_required");

    public static readonly Code UnknownMetric = new("unknown_metric");

    public static readonly Code TooManyDimensions = new("too_many_dimensions");

    public static readonly Code UnknownDimension = new("unknown_dimension");

    public static readonly Code InvalidDateRange = new("invalid_date_range");

    public static readonly Code InvalidInterval = new("invalid_interval");

    public static readonly Code MetricNotAvailable = new("metric_not_available");

    public static readonly Code InvalidFilter = new("invalid_filter");

    public static readonly Code EventFilterRequired = new("event_filter_required");

    public static readonly Code InvalidCompare = new("invalid_compare");

    public static readonly Code CompareLengthMismatch = new("compare_length_mismatch");

    public static readonly Code SiteIdRequired = new("site_id_required");

    public static readonly Code LimitOffsetMisuse = new("limit_offset_misuse");

    public static readonly Code Unauthorized = new("unauthorized");

    public static readonly Code InsufficientScope = new("insufficient_scope");

    public static readonly Code KeyNotScoped = new("key_not_scoped");

    public static readonly Code TrackingInactive = new("tracking_inactive");

    public static readonly Code UnknownSite = new("unknown_site");

    public static readonly Code UnknownFunnel = new("unknown_funnel");

    public static readonly Code RateLimited = new("rate_limited");

    public static readonly Code Internal = new("internal");

    public static readonly Code AmbiguousDomain = new("ambiguous_domain");

    public static readonly Code InvalidScope = new("invalid_scope");

    public static readonly Code ScopeEscalation = new("scope_escalation");

    public static readonly Code InvalidExpiry = new("invalid_expiry");

    public static readonly Code KeyLimitReached = new("key_limit_reached");

    public static readonly Code ApiKeyNotFound = new("api_key_not_found");

    public static readonly Code SelfModification = new("self_modification");

    public static readonly Code WriteDisabled = new("write_disabled");

    public static readonly Code TermsNotAccepted = new("terms_not_accepted");

    public static readonly Code OtpInvalid = new("otp_invalid");

    public static readonly Code SiteExists = new("site_exists");

    public static readonly Code DomainNotAllowed = new("domain_not_allowed");

    public static readonly Code EmailUndeliverable = new("email_undeliverable");

    public static readonly Code NotSiteOwner = new("not_site_owner");

    public static readonly Code IdempotencyConflict = new("idempotency_conflict");

    public static readonly Code GoalExists = new("goal_exists");

    public static readonly Code GoalNotFound = new("goal_not_found");

    public static readonly Code FunnelExists = new("funnel_exists");

    public static readonly Code HobbyAlwaysPublic = new("hobby_always_public");

    public static readonly Code NotFound = new("not_found");

    public static readonly Code MethodNotAllowed = new("method_not_allowed");

    public TResult Match<TResult>(Func<TResult> onInvalidRequest,
        Func<TResult> onMetricsRequired,
        Func<TResult> onUnknownMetric,
        Func<TResult> onTooManyDimensions,
        Func<TResult> onUnknownDimension,
        Func<TResult> onInvalidDateRange,
        Func<TResult> onInvalidInterval,
        Func<TResult> onMetricNotAvailable,
        Func<TResult> onInvalidFilter,
        Func<TResult> onEventFilterRequired,
        Func<TResult> onInvalidCompare,
        Func<TResult> onCompareLengthMismatch,
        Func<TResult> onSiteIdRequired,
        Func<TResult> onLimitOffsetMisuse,
        Func<TResult> onUnauthorized,
        Func<TResult> onInsufficientScope,
        Func<TResult> onKeyNotScoped,
        Func<TResult> onTrackingInactive,
        Func<TResult> onUnknownSite,
        Func<TResult> onUnknownFunnel,
        Func<TResult> onRateLimited,
        Func<TResult> onInternal,
        Func<TResult> onAmbiguousDomain,
        Func<TResult> onInvalidScope,
        Func<TResult> onScopeEscalation,
        Func<TResult> onInvalidExpiry,
        Func<TResult> onKeyLimitReached,
        Func<TResult> onApiKeyNotFound,
        Func<TResult> onSelfModification,
        Func<TResult> onWriteDisabled,
        Func<TResult> onTermsNotAccepted,
        Func<TResult> onOtpInvalid,
        Func<TResult> onSiteExists,
        Func<TResult> onDomainNotAllowed,
        Func<TResult> onEmailUndeliverable,
        Func<TResult> onNotSiteOwner,
        Func<TResult> onIdempotencyConflict,
        Func<TResult> onGoalExists,
        Func<TResult> onGoalNotFound,
        Func<TResult> onFunnelExists,
        Func<TResult> onHobbyAlwaysPublic,
        Func<TResult> onNotFound,
        Func<TResult> onMethodNotAllowed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InvalidRequest => onInvalidRequest(),
            _ when this == MetricsRequired => onMetricsRequired(),
            _ when this == UnknownMetric => onUnknownMetric(),
            _ when this == TooManyDimensions => onTooManyDimensions(),
            _ when this == UnknownDimension => onUnknownDimension(),
            _ when this == InvalidDateRange => onInvalidDateRange(),
            _ when this == InvalidInterval => onInvalidInterval(),
            _ when this == MetricNotAvailable => onMetricNotAvailable(),
            _ when this == InvalidFilter => onInvalidFilter(),
            _ when this == EventFilterRequired => onEventFilterRequired(),
            _ when this == InvalidCompare => onInvalidCompare(),
            _ when this == CompareLengthMismatch => onCompareLengthMismatch(),
            _ when this == SiteIdRequired => onSiteIdRequired(),
            _ when this == LimitOffsetMisuse => onLimitOffsetMisuse(),
            _ when this == Unauthorized => onUnauthorized(),
            _ when this == InsufficientScope => onInsufficientScope(),
            _ when this == KeyNotScoped => onKeyNotScoped(),
            _ when this == TrackingInactive => onTrackingInactive(),
            _ when this == UnknownSite => onUnknownSite(),
            _ when this == UnknownFunnel => onUnknownFunnel(),
            _ when this == RateLimited => onRateLimited(),
            _ when this == Internal => onInternal(),
            _ when this == AmbiguousDomain => onAmbiguousDomain(),
            _ when this == InvalidScope => onInvalidScope(),
            _ when this == ScopeEscalation => onScopeEscalation(),
            _ when this == InvalidExpiry => onInvalidExpiry(),
            _ when this == KeyLimitReached => onKeyLimitReached(),
            _ when this == ApiKeyNotFound => onApiKeyNotFound(),
            _ when this == SelfModification => onSelfModification(),
            _ when this == WriteDisabled => onWriteDisabled(),
            _ when this == TermsNotAccepted => onTermsNotAccepted(),
            _ when this == OtpInvalid => onOtpInvalid(),
            _ when this == SiteExists => onSiteExists(),
            _ when this == DomainNotAllowed => onDomainNotAllowed(),
            _ when this == EmailUndeliverable => onEmailUndeliverable(),
            _ when this == NotSiteOwner => onNotSiteOwner(),
            _ when this == IdempotencyConflict => onIdempotencyConflict(),
            _ when this == GoalExists => onGoalExists(),
            _ when this == GoalNotFound => onGoalNotFound(),
            _ when this == FunnelExists => onFunnelExists(),
            _ when this == HobbyAlwaysPublic => onHobbyAlwaysPublic(),
            _ when this == NotFound => onNotFound(),
            _ when this == MethodNotAllowed => onMethodNotAllowed(),
            _ => otherwise(Value)
        };

    public void Match(Action onInvalidRequest,
        Action onMetricsRequired,
        Action onUnknownMetric,
        Action onTooManyDimensions,
        Action onUnknownDimension,
        Action onInvalidDateRange,
        Action onInvalidInterval,
        Action onMetricNotAvailable,
        Action onInvalidFilter,
        Action onEventFilterRequired,
        Action onInvalidCompare,
        Action onCompareLengthMismatch,
        Action onSiteIdRequired,
        Action onLimitOffsetMisuse,
        Action onUnauthorized,
        Action onInsufficientScope,
        Action onKeyNotScoped,
        Action onTrackingInactive,
        Action onUnknownSite,
        Action onUnknownFunnel,
        Action onRateLimited,
        Action onInternal,
        Action onAmbiguousDomain,
        Action onInvalidScope,
        Action onScopeEscalation,
        Action onInvalidExpiry,
        Action onKeyLimitReached,
        Action onApiKeyNotFound,
        Action onSelfModification,
        Action onWriteDisabled,
        Action onTermsNotAccepted,
        Action onOtpInvalid,
        Action onSiteExists,
        Action onDomainNotAllowed,
        Action onEmailUndeliverable,
        Action onNotSiteOwner,
        Action onIdempotencyConflict,
        Action onGoalExists,
        Action onGoalNotFound,
        Action onFunnelExists,
        Action onHobbyAlwaysPublic,
        Action onNotFound,
        Action onMethodNotAllowed,
        Action<string> otherwise)
    {
        if (this == InvalidRequest) onInvalidRequest();
        else if (this == MetricsRequired) onMetricsRequired();
        else if (this == UnknownMetric) onUnknownMetric();
        else if (this == TooManyDimensions) onTooManyDimensions();
        else if (this == UnknownDimension) onUnknownDimension();
        else if (this == InvalidDateRange) onInvalidDateRange();
        else if (this == InvalidInterval) onInvalidInterval();
        else if (this == MetricNotAvailable) onMetricNotAvailable();
        else if (this == InvalidFilter) onInvalidFilter();
        else if (this == EventFilterRequired) onEventFilterRequired();
        else if (this == InvalidCompare) onInvalidCompare();
        else if (this == CompareLengthMismatch) onCompareLengthMismatch();
        else if (this == SiteIdRequired) onSiteIdRequired();
        else if (this == LimitOffsetMisuse) onLimitOffsetMisuse();
        else if (this == Unauthorized) onUnauthorized();
        else if (this == InsufficientScope) onInsufficientScope();
        else if (this == KeyNotScoped) onKeyNotScoped();
        else if (this == TrackingInactive) onTrackingInactive();
        else if (this == UnknownSite) onUnknownSite();
        else if (this == UnknownFunnel) onUnknownFunnel();
        else if (this == RateLimited) onRateLimited();
        else if (this == Internal) onInternal();
        else if (this == AmbiguousDomain) onAmbiguousDomain();
        else if (this == InvalidScope) onInvalidScope();
        else if (this == ScopeEscalation) onScopeEscalation();
        else if (this == InvalidExpiry) onInvalidExpiry();
        else if (this == KeyLimitReached) onKeyLimitReached();
        else if (this == ApiKeyNotFound) onApiKeyNotFound();
        else if (this == SelfModification) onSelfModification();
        else if (this == WriteDisabled) onWriteDisabled();
        else if (this == TermsNotAccepted) onTermsNotAccepted();
        else if (this == OtpInvalid) onOtpInvalid();
        else if (this == SiteExists) onSiteExists();
        else if (this == DomainNotAllowed) onDomainNotAllowed();
        else if (this == EmailUndeliverable) onEmailUndeliverable();
        else if (this == NotSiteOwner) onNotSiteOwner();
        else if (this == IdempotencyConflict) onIdempotencyConflict();
        else if (this == GoalExists) onGoalExists();
        else if (this == GoalNotFound) onGoalNotFound();
        else if (this == FunnelExists) onFunnelExists();
        else if (this == HobbyAlwaysPublic) onHobbyAlwaysPublic();
        else if (this == NotFound) onNotFound();
        else if (this == MethodNotAllowed) onMethodNotAllowed();
        else otherwise(Value);
    }
}
