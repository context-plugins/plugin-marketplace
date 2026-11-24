using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Matched = new("matched");

    public static readonly Status1 Mismatched = new("mismatched");

    public static readonly Status1 Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onMatched,
        Func<TResult> onMismatched,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Matched => onMatched(),
            _ when this == Mismatched => onMismatched(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onMatched, Action onMismatched, Action onUnknown, Action<string> otherwise)
    {
        if (this == Matched) onMatched();
        else if (this == Mismatched) onMismatched();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
