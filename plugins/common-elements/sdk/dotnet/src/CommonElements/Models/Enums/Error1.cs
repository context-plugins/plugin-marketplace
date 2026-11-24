using System;
using System.Text.Json.Serialization;
using CommonElements.Core.Enum;

namespace CommonElements.Models.Enums;

/// <summary>
/// Stable machine-readable code. Switch on this, not on the message.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Error1>))]
public sealed record Error1 : OpenStringEnum<Error1>
{
    private Error1(string value) : base(value)
    {
    }

    public static readonly Error1 ValidationError = new("validation_error");

    public static readonly Error1 InvalidApiKey = new("invalid_api_key");

    public static readonly Error1 ScopeNotAllowed = new("scope_not_allowed");

    public static readonly Error1 TierNotAllowed = new("tier_not_allowed");

    public static readonly Error1 NotFound = new("not_found");

    public static readonly Error1 QuotaExceeded = new("quota_exceeded");

    public static readonly Error1 PublicRecordAllowanceExceeded = new("public_record_allowance_exceeded");

    public static readonly Error1 NotImplemented = new("not_implemented");

    public static readonly Error1 SearchTimeout = new("search_timeout");

    public static readonly Error1 InternalError = new("internal_error");

    public static readonly Error1 ServiceUnavailable = new("service_unavailable");

    public TResult Match<TResult>(Func<TResult> onValidationError,
        Func<TResult> onInvalidApiKey,
        Func<TResult> onScopeNotAllowed,
        Func<TResult> onTierNotAllowed,
        Func<TResult> onNotFound,
        Func<TResult> onQuotaExceeded,
        Func<TResult> onPublicRecordAllowanceExceeded,
        Func<TResult> onNotImplemented,
        Func<TResult> onSearchTimeout,
        Func<TResult> onInternalError,
        Func<TResult> onServiceUnavailable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ValidationError => onValidationError(),
            _ when this == InvalidApiKey => onInvalidApiKey(),
            _ when this == ScopeNotAllowed => onScopeNotAllowed(),
            _ when this == TierNotAllowed => onTierNotAllowed(),
            _ when this == NotFound => onNotFound(),
            _ when this == QuotaExceeded => onQuotaExceeded(),
            _ when this == PublicRecordAllowanceExceeded => onPublicRecordAllowanceExceeded(),
            _ when this == NotImplemented => onNotImplemented(),
            _ when this == SearchTimeout => onSearchTimeout(),
            _ when this == InternalError => onInternalError(),
            _ when this == ServiceUnavailable => onServiceUnavailable(),
            _ => otherwise(Value)
        };

    public void Match(Action onValidationError,
        Action onInvalidApiKey,
        Action onScopeNotAllowed,
        Action onTierNotAllowed,
        Action onNotFound,
        Action onQuotaExceeded,
        Action onPublicRecordAllowanceExceeded,
        Action onNotImplemented,
        Action onSearchTimeout,
        Action onInternalError,
        Action onServiceUnavailable,
        Action<string> otherwise)
    {
        if (this == ValidationError) onValidationError();
        else if (this == InvalidApiKey) onInvalidApiKey();
        else if (this == ScopeNotAllowed) onScopeNotAllowed();
        else if (this == TierNotAllowed) onTierNotAllowed();
        else if (this == NotFound) onNotFound();
        else if (this == QuotaExceeded) onQuotaExceeded();
        else if (this == PublicRecordAllowanceExceeded) onPublicRecordAllowanceExceeded();
        else if (this == NotImplemented) onNotImplemented();
        else if (this == SearchTimeout) onSearchTimeout();
        else if (this == InternalError) onInternalError();
        else if (this == ServiceUnavailable) onServiceUnavailable();
        else otherwise(Value);
    }
}
