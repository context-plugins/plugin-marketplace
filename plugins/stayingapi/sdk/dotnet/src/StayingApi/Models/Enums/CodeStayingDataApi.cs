using System;
using System.Text.Json.Serialization;
using StayingApi.Core.Enum;

namespace StayingApi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CodeStayingDataApi>))]
public sealed record CodeStayingDataApi : OpenStringEnum<CodeStayingDataApi>
{
    private CodeStayingDataApi(string value) : base(value)
    {
    }

    public static readonly CodeStayingDataApi MissingParameter = new("missing_parameter");

    public static readonly CodeStayingDataApi InvalidParameter = new("invalid_parameter");

    public static readonly CodeStayingDataApi InvalidDateRange = new("invalid_date_range");

    public static readonly CodeStayingDataApi DateInPast = new("date_in_past");

    public static readonly CodeStayingDataApi ChildAgesMismatch = new("child_ages_mismatch");

    public static readonly CodeStayingDataApi StayTooLong = new("stay_too_long");

    public static readonly CodeStayingDataApi WindowTooLong = new("window_too_long");

    public static readonly CodeStayingDataApi InvalidListingUrl = new("invalid_listing_url");

    public static readonly CodeStayingDataApi InvalidPropertyType = new("invalid_property_type");

    public static readonly CodeStayingDataApi InvalidAmenity = new("invalid_amenity");

    public static readonly CodeStayingDataApi InvalidPriceRange = new("invalid_price_range");

    public static readonly CodeStayingDataApi InvalidLanguage = new("invalid_language");

    public static readonly CodeStayingDataApi InvalidSort = new("invalid_sort");

    public static readonly CodeStayingDataApi InvalidCursor = new("invalid_cursor");

    public static readonly CodeStayingDataApi LimitOutOfRange = new("limit_out_of_range");

    public static readonly CodeStayingDataApi MutuallyExclusiveParams = new("mutually_exclusive_params");

    public static readonly CodeStayingDataApi PlatformNotEnabled = new("platform_not_enabled");

    public static readonly CodeStayingDataApi NoEnabledPlatform = new("no_enabled_platform");

    public static readonly CodeStayingDataApi NeedsCountry = new("needs_country");

    public static readonly CodeStayingDataApi MissingApiKey = new("missing_api_key");

    public static readonly CodeStayingDataApi InvalidApiKey = new("invalid_api_key");

    public static readonly CodeStayingDataApi RevokedApiKey = new("revoked_api_key");

    public static readonly CodeStayingDataApi ScopeInsufficient = new("scope_insufficient");

    public static readonly CodeStayingDataApi EmailUnverified = new("email_unverified");

    public static readonly CodeStayingDataApi SubscriptionRequired = new("subscription_required");

    public static readonly CodeStayingDataApi ListingNotFound = new("listing_not_found");

    public static readonly CodeStayingDataApi JobNotFound = new("job_not_found");

    public static readonly CodeStayingDataApi IdentityMismatch = new("identity_mismatch");

    public static readonly CodeStayingDataApi CreditBalanceTooLow = new("credit_balance_too_low");

    public static readonly CodeStayingDataApi RateLimitExceeded = new("rate_limit_exceeded");

    public static readonly CodeStayingDataApi AllActorsFailed = new("all_actors_failed");

    public static readonly CodeStayingDataApi ActorBlocked = new("actor_blocked");

    public static readonly CodeStayingDataApi UpstreamDegraded = new("upstream_degraded");

    public static readonly CodeStayingDataApi ActorTimeout = new("actor_timeout");

    public static readonly CodeStayingDataApi InternalError = new("internal_error");

    public TResult Match<TResult>(Func<TResult> onMissingParameter,
        Func<TResult> onInvalidParameter,
        Func<TResult> onInvalidDateRange,
        Func<TResult> onDateInPast,
        Func<TResult> onChildAgesMismatch,
        Func<TResult> onStayTooLong,
        Func<TResult> onWindowTooLong,
        Func<TResult> onInvalidListingUrl,
        Func<TResult> onInvalidPropertyType,
        Func<TResult> onInvalidAmenity,
        Func<TResult> onInvalidPriceRange,
        Func<TResult> onInvalidLanguage,
        Func<TResult> onInvalidSort,
        Func<TResult> onInvalidCursor,
        Func<TResult> onLimitOutOfRange,
        Func<TResult> onMutuallyExclusiveParams,
        Func<TResult> onPlatformNotEnabled,
        Func<TResult> onNoEnabledPlatform,
        Func<TResult> onNeedsCountry,
        Func<TResult> onMissingApiKey,
        Func<TResult> onInvalidApiKey,
        Func<TResult> onRevokedApiKey,
        Func<TResult> onScopeInsufficient,
        Func<TResult> onEmailUnverified,
        Func<TResult> onSubscriptionRequired,
        Func<TResult> onListingNotFound,
        Func<TResult> onJobNotFound,
        Func<TResult> onIdentityMismatch,
        Func<TResult> onCreditBalanceTooLow,
        Func<TResult> onRateLimitExceeded,
        Func<TResult> onAllActorsFailed,
        Func<TResult> onActorBlocked,
        Func<TResult> onUpstreamDegraded,
        Func<TResult> onActorTimeout,
        Func<TResult> onInternalError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MissingParameter => onMissingParameter(),
            _ when this == InvalidParameter => onInvalidParameter(),
            _ when this == InvalidDateRange => onInvalidDateRange(),
            _ when this == DateInPast => onDateInPast(),
            _ when this == ChildAgesMismatch => onChildAgesMismatch(),
            _ when this == StayTooLong => onStayTooLong(),
            _ when this == WindowTooLong => onWindowTooLong(),
            _ when this == InvalidListingUrl => onInvalidListingUrl(),
            _ when this == InvalidPropertyType => onInvalidPropertyType(),
            _ when this == InvalidAmenity => onInvalidAmenity(),
            _ when this == InvalidPriceRange => onInvalidPriceRange(),
            _ when this == InvalidLanguage => onInvalidLanguage(),
            _ when this == InvalidSort => onInvalidSort(),
            _ when this == InvalidCursor => onInvalidCursor(),
            _ when this == LimitOutOfRange => onLimitOutOfRange(),
            _ when this == MutuallyExclusiveParams => onMutuallyExclusiveParams(),
            _ when this == PlatformNotEnabled => onPlatformNotEnabled(),
            _ when this == NoEnabledPlatform => onNoEnabledPlatform(),
            _ when this == NeedsCountry => onNeedsCountry(),
            _ when this == MissingApiKey => onMissingApiKey(),
            _ when this == InvalidApiKey => onInvalidApiKey(),
            _ when this == RevokedApiKey => onRevokedApiKey(),
            _ when this == ScopeInsufficient => onScopeInsufficient(),
            _ when this == EmailUnverified => onEmailUnverified(),
            _ when this == SubscriptionRequired => onSubscriptionRequired(),
            _ when this == ListingNotFound => onListingNotFound(),
            _ when this == JobNotFound => onJobNotFound(),
            _ when this == IdentityMismatch => onIdentityMismatch(),
            _ when this == CreditBalanceTooLow => onCreditBalanceTooLow(),
            _ when this == RateLimitExceeded => onRateLimitExceeded(),
            _ when this == AllActorsFailed => onAllActorsFailed(),
            _ when this == ActorBlocked => onActorBlocked(),
            _ when this == UpstreamDegraded => onUpstreamDegraded(),
            _ when this == ActorTimeout => onActorTimeout(),
            _ when this == InternalError => onInternalError(),
            _ => otherwise(Value)
        };

    public void Match(Action onMissingParameter,
        Action onInvalidParameter,
        Action onInvalidDateRange,
        Action onDateInPast,
        Action onChildAgesMismatch,
        Action onStayTooLong,
        Action onWindowTooLong,
        Action onInvalidListingUrl,
        Action onInvalidPropertyType,
        Action onInvalidAmenity,
        Action onInvalidPriceRange,
        Action onInvalidLanguage,
        Action onInvalidSort,
        Action onInvalidCursor,
        Action onLimitOutOfRange,
        Action onMutuallyExclusiveParams,
        Action onPlatformNotEnabled,
        Action onNoEnabledPlatform,
        Action onNeedsCountry,
        Action onMissingApiKey,
        Action onInvalidApiKey,
        Action onRevokedApiKey,
        Action onScopeInsufficient,
        Action onEmailUnverified,
        Action onSubscriptionRequired,
        Action onListingNotFound,
        Action onJobNotFound,
        Action onIdentityMismatch,
        Action onCreditBalanceTooLow,
        Action onRateLimitExceeded,
        Action onAllActorsFailed,
        Action onActorBlocked,
        Action onUpstreamDegraded,
        Action onActorTimeout,
        Action onInternalError,
        Action<string> otherwise)
    {
        if (this == MissingParameter) onMissingParameter();
        else if (this == InvalidParameter) onInvalidParameter();
        else if (this == InvalidDateRange) onInvalidDateRange();
        else if (this == DateInPast) onDateInPast();
        else if (this == ChildAgesMismatch) onChildAgesMismatch();
        else if (this == StayTooLong) onStayTooLong();
        else if (this == WindowTooLong) onWindowTooLong();
        else if (this == InvalidListingUrl) onInvalidListingUrl();
        else if (this == InvalidPropertyType) onInvalidPropertyType();
        else if (this == InvalidAmenity) onInvalidAmenity();
        else if (this == InvalidPriceRange) onInvalidPriceRange();
        else if (this == InvalidLanguage) onInvalidLanguage();
        else if (this == InvalidSort) onInvalidSort();
        else if (this == InvalidCursor) onInvalidCursor();
        else if (this == LimitOutOfRange) onLimitOutOfRange();
        else if (this == MutuallyExclusiveParams) onMutuallyExclusiveParams();
        else if (this == PlatformNotEnabled) onPlatformNotEnabled();
        else if (this == NoEnabledPlatform) onNoEnabledPlatform();
        else if (this == NeedsCountry) onNeedsCountry();
        else if (this == MissingApiKey) onMissingApiKey();
        else if (this == InvalidApiKey) onInvalidApiKey();
        else if (this == RevokedApiKey) onRevokedApiKey();
        else if (this == ScopeInsufficient) onScopeInsufficient();
        else if (this == EmailUnverified) onEmailUnverified();
        else if (this == SubscriptionRequired) onSubscriptionRequired();
        else if (this == ListingNotFound) onListingNotFound();
        else if (this == JobNotFound) onJobNotFound();
        else if (this == IdentityMismatch) onIdentityMismatch();
        else if (this == CreditBalanceTooLow) onCreditBalanceTooLow();
        else if (this == RateLimitExceeded) onRateLimitExceeded();
        else if (this == AllActorsFailed) onAllActorsFailed();
        else if (this == ActorBlocked) onActorBlocked();
        else if (this == UpstreamDegraded) onUpstreamDegraded();
        else if (this == ActorTimeout) onActorTimeout();
        else if (this == InternalError) onInternalError();
        else otherwise(Value);
    }
}
