using System;
using System.Text.Json.Serialization;
using StayingApi.Core.Enum;

namespace StayingApi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum InvalidRequest = new("invalid_request");

    public static readonly TypeEnum AuthenticationError = new("authentication_error");

    public static readonly TypeEnum PermissionDenied = new("permission_denied");

    public static readonly TypeEnum NotFound = new("not_found");

    public static readonly TypeEnum InsufficientCredits = new("insufficient_credits");

    public static readonly TypeEnum RateLimited = new("rate_limited");

    public static readonly TypeEnum UpstreamUnavailable = new("upstream_unavailable");

    public static readonly TypeEnum UpstreamTimeout = new("upstream_timeout");

    public static readonly TypeEnum InternalError = new("internal_error");

    public TResult Match<TResult>(Func<TResult> onInvalidRequest,
        Func<TResult> onAuthenticationError,
        Func<TResult> onPermissionDenied,
        Func<TResult> onNotFound,
        Func<TResult> onInsufficientCredits,
        Func<TResult> onRateLimited,
        Func<TResult> onUpstreamUnavailable,
        Func<TResult> onUpstreamTimeout,
        Func<TResult> onInternalError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InvalidRequest => onInvalidRequest(),
            _ when this == AuthenticationError => onAuthenticationError(),
            _ when this == PermissionDenied => onPermissionDenied(),
            _ when this == NotFound => onNotFound(),
            _ when this == InsufficientCredits => onInsufficientCredits(),
            _ when this == RateLimited => onRateLimited(),
            _ when this == UpstreamUnavailable => onUpstreamUnavailable(),
            _ when this == UpstreamTimeout => onUpstreamTimeout(),
            _ when this == InternalError => onInternalError(),
            _ => otherwise(Value)
        };

    public void Match(Action onInvalidRequest,
        Action onAuthenticationError,
        Action onPermissionDenied,
        Action onNotFound,
        Action onInsufficientCredits,
        Action onRateLimited,
        Action onUpstreamUnavailable,
        Action onUpstreamTimeout,
        Action onInternalError,
        Action<string> otherwise)
    {
        if (this == InvalidRequest) onInvalidRequest();
        else if (this == AuthenticationError) onAuthenticationError();
        else if (this == PermissionDenied) onPermissionDenied();
        else if (this == NotFound) onNotFound();
        else if (this == InsufficientCredits) onInsufficientCredits();
        else if (this == RateLimited) onRateLimited();
        else if (this == UpstreamUnavailable) onUpstreamUnavailable();
        else if (this == UpstreamTimeout) onUpstreamTimeout();
        else if (this == InternalError) onInternalError();
        else otherwise(Value);
    }
}
