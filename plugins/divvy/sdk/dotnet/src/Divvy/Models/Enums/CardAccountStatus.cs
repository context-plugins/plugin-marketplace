using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Card Account response status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CardAccountStatus>))]
public sealed record CardAccountStatus : OpenStringEnum<CardAccountStatus>
{
    private CardAccountStatus(string value) : base(value)
    {
    }

    public static readonly CardAccountStatus NotVerified = new("NOT_VERIFIED");

    public static readonly CardAccountStatus Verified = new("VERIFIED");

    public static readonly CardAccountStatus Pending = new("PENDING");

    public static readonly CardAccountStatus Blocked = new("BLOCKED");

    public static readonly CardAccountStatus Expired = new("EXPIRED");

    public static readonly CardAccountStatus Invalid = new("INVALID");

    public static readonly CardAccountStatus Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onNotVerified,
        Func<TResult> onVerified,
        Func<TResult> onPending,
        Func<TResult> onBlocked,
        Func<TResult> onExpired,
        Func<TResult> onInvalid,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotVerified => onNotVerified(),
            _ when this == Verified => onVerified(),
            _ when this == Pending => onPending(),
            _ when this == Blocked => onBlocked(),
            _ when this == Expired => onExpired(),
            _ when this == Invalid => onInvalid(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotVerified,
        Action onVerified,
        Action onPending,
        Action onBlocked,
        Action onExpired,
        Action onInvalid,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == NotVerified) onNotVerified();
        else if (this == Verified) onVerified();
        else if (this == Pending) onPending();
        else if (this == Blocked) onBlocked();
        else if (this == Expired) onExpired();
        else if (this == Invalid) onInvalid();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
