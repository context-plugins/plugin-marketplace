using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The error code.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Code>))]
public sealed record Code : OpenStringEnum<Code>
{
    private Code(string value) : base(value)
    {
    }

    public static readonly Code BadRequest = new("bad_request");

    public static readonly Code NotFound = new("not_found");

    public static readonly Code InternalServerError = new("internal_server_error");

    public static readonly Code Unauthorized = new("unauthorized");

    public static readonly Code Forbidden = new("forbidden");

    public static readonly Code RateLimitExceeded = new("rate_limit_exceeded");

    public static readonly Code InviteExpired = new("invite_expired");

    public static readonly Code InvitePending = new("invite_pending");

    public static readonly Code ExceededLimit = new("exceeded_limit");

    public static readonly Code Conflict = new("conflict");

    public static readonly Code UnprocessableEntity = new("unprocessable_entity");

    public static readonly Code ServiceUnavailable = new("service_unavailable");

    public TResult Match<TResult>(Func<TResult> onBadRequest,
        Func<TResult> onNotFound,
        Func<TResult> onInternalServerError,
        Func<TResult> onUnauthorized,
        Func<TResult> onForbidden,
        Func<TResult> onRateLimitExceeded,
        Func<TResult> onInviteExpired,
        Func<TResult> onInvitePending,
        Func<TResult> onExceededLimit,
        Func<TResult> onConflict,
        Func<TResult> onUnprocessableEntity,
        Func<TResult> onServiceUnavailable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BadRequest => onBadRequest(),
            _ when this == NotFound => onNotFound(),
            _ when this == InternalServerError => onInternalServerError(),
            _ when this == Unauthorized => onUnauthorized(),
            _ when this == Forbidden => onForbidden(),
            _ when this == RateLimitExceeded => onRateLimitExceeded(),
            _ when this == InviteExpired => onInviteExpired(),
            _ when this == InvitePending => onInvitePending(),
            _ when this == ExceededLimit => onExceededLimit(),
            _ when this == Conflict => onConflict(),
            _ when this == UnprocessableEntity => onUnprocessableEntity(),
            _ when this == ServiceUnavailable => onServiceUnavailable(),
            _ => otherwise(Value)
        };

    public void Match(Action onBadRequest,
        Action onNotFound,
        Action onInternalServerError,
        Action onUnauthorized,
        Action onForbidden,
        Action onRateLimitExceeded,
        Action onInviteExpired,
        Action onInvitePending,
        Action onExceededLimit,
        Action onConflict,
        Action onUnprocessableEntity,
        Action onServiceUnavailable,
        Action<string> otherwise)
    {
        if (this == BadRequest) onBadRequest();
        else if (this == NotFound) onNotFound();
        else if (this == InternalServerError) onInternalServerError();
        else if (this == Unauthorized) onUnauthorized();
        else if (this == Forbidden) onForbidden();
        else if (this == RateLimitExceeded) onRateLimitExceeded();
        else if (this == InviteExpired) onInviteExpired();
        else if (this == InvitePending) onInvitePending();
        else if (this == ExceededLimit) onExceededLimit();
        else if (this == Conflict) onConflict();
        else if (this == UnprocessableEntity) onUnprocessableEntity();
        else if (this == ServiceUnavailable) onServiceUnavailable();
        else otherwise(Value);
    }
}
