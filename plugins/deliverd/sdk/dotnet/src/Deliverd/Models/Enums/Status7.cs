using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status7>))]
public sealed record Status7 : OpenStringEnum<Status7>
{
    private Status7(string value) : base(value)
    {
    }

    public static readonly Status7 Open = new("open");

    public static readonly Status7 Verified = new("verified");

    public static readonly Status7 Complete = new("complete");

    public static readonly Status7 Expired = new("expired");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onVerified,
        Func<TResult> onComplete,
        Func<TResult> onExpired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Verified => onVerified(),
            _ when this == Complete => onComplete(),
            _ when this == Expired => onExpired(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onVerified, Action onComplete, Action onExpired, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Verified) onVerified();
        else if (this == Complete) onComplete();
        else if (this == Expired) onExpired();
        else otherwise(Value);
    }
}
