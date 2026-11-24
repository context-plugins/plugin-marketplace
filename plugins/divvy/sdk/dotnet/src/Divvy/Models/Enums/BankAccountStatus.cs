using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Bank account status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BankAccountStatus>))]
public sealed record BankAccountStatus : OpenStringEnum<BankAccountStatus>
{
    private BankAccountStatus(string value) : base(value)
    {
    }

    public static readonly BankAccountStatus NotVerified = new("NOT_VERIFIED");

    public static readonly BankAccountStatus Verified = new("VERIFIED");

    public static readonly BankAccountStatus Pending = new("PENDING");

    public static readonly BankAccountStatus Blocked = new("BLOCKED");

    public static readonly BankAccountStatus Expired = new("EXPIRED");

    public static readonly BankAccountStatus Invalid = new("INVALID");

    public static readonly BankAccountStatus Undefined = new("UNDEFINED");

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
