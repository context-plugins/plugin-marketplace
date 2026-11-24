using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

/// <summary>
/// Family of the error, from the HTTP status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum AuthenticationError = new("authentication_error");

    public static readonly TypeEnum PermissionError = new("permission_error");

    public static readonly TypeEnum NotFoundError = new("not_found_error");

    public static readonly TypeEnum ConflictError = new("conflict_error");

    public static readonly TypeEnum InvalidRequestError = new("invalid_request_error");

    public static readonly TypeEnum RateLimitError = new("rate_limit_error");

    public static readonly TypeEnum ApiError = new("api_error");

    public TResult Match<TResult>(Func<TResult> onAuthenticationError,
        Func<TResult> onPermissionError,
        Func<TResult> onNotFoundError,
        Func<TResult> onConflictError,
        Func<TResult> onInvalidRequestError,
        Func<TResult> onRateLimitError,
        Func<TResult> onApiError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AuthenticationError => onAuthenticationError(),
            _ when this == PermissionError => onPermissionError(),
            _ when this == NotFoundError => onNotFoundError(),
            _ when this == ConflictError => onConflictError(),
            _ when this == InvalidRequestError => onInvalidRequestError(),
            _ when this == RateLimitError => onRateLimitError(),
            _ when this == ApiError => onApiError(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuthenticationError,
        Action onPermissionError,
        Action onNotFoundError,
        Action onConflictError,
        Action onInvalidRequestError,
        Action onRateLimitError,
        Action onApiError,
        Action<string> otherwise)
    {
        if (this == AuthenticationError) onAuthenticationError();
        else if (this == PermissionError) onPermissionError();
        else if (this == NotFoundError) onNotFoundError();
        else if (this == ConflictError) onConflictError();
        else if (this == InvalidRequestError) onInvalidRequestError();
        else if (this == RateLimitError) onRateLimitError();
        else if (this == ApiError) onApiError();
        else otherwise(Value);
    }
}
