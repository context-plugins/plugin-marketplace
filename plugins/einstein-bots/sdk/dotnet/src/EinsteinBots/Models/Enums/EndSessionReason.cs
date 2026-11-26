using System;
using System.Text.Json.Serialization;
using EinsteinBots.Core.Enum;

namespace EinsteinBots.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EndSessionReason>))]
public sealed record EndSessionReason : OpenStringEnum<EndSessionReason>
{
    private EndSessionReason(string value) : base(value)
    {
    }

    public static readonly EndSessionReason UserRequest = new("UserRequest");

    public static readonly EndSessionReason Transfer = new("Transfer");

    public static readonly EndSessionReason Expiration = new("Expiration");

    public static readonly EndSessionReason Error = new("Error");

    public static readonly EndSessionReason Other = new("Other");

    public TResult Match<TResult>(Func<TResult> onUserRequest,
        Func<TResult> onTransfer,
        Func<TResult> onExpiration,
        Func<TResult> onError,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UserRequest => onUserRequest(),
            _ when this == Transfer => onTransfer(),
            _ when this == Expiration => onExpiration(),
            _ when this == Error => onError(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onUserRequest,
        Action onTransfer,
        Action onExpiration,
        Action onError,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == UserRequest) onUserRequest();
        else if (this == Transfer) onTransfer();
        else if (this == Expiration) onExpiration();
        else if (this == Error) onError();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
