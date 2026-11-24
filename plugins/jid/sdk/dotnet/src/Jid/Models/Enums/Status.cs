using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Pass = new("pass");

    public static readonly Status Fail = new("fail");

    public static readonly Status Unknown = new("unknown");

    public static readonly Status Na = new("na");

    public TResult Match<TResult>(Func<TResult> onPass,
        Func<TResult> onFail,
        Func<TResult> onUnknown,
        Func<TResult> onNa,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pass => onPass(),
            _ when this == Fail => onFail(),
            _ when this == Unknown => onUnknown(),
            _ when this == Na => onNa(),
            _ => otherwise(Value)
        };

    public void Match(Action onPass, Action onFail, Action onUnknown, Action onNa, Action<string> otherwise)
    {
        if (this == Pass) onPass();
        else if (this == Fail) onFail();
        else if (this == Unknown) onUnknown();
        else if (this == Na) onNa();
        else otherwise(Value);
    }
}
