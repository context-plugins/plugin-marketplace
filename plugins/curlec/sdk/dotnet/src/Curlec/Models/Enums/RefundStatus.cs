using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RefundStatus>))]
public sealed record RefundStatus : OpenStringEnum<RefundStatus>
{
    private RefundStatus(string value) : base(value)
    {
    }

    public static readonly RefundStatus Null = new("null");

    public static readonly RefundStatus Partial = new("partial");

    public static readonly RefundStatus Full = new("full");

    public TResult Match<TResult>(Func<TResult> onNull,
        Func<TResult> onPartial,
        Func<TResult> onFull,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Null => onNull(),
            _ when this == Partial => onPartial(),
            _ when this == Full => onFull(),
            _ => otherwise(Value)
        };

    public void Match(Action onNull, Action onPartial, Action onFull, Action<string> otherwise)
    {
        if (this == Null) onNull();
        else if (this == Partial) onPartial();
        else if (this == Full) onFull();
        else otherwise(Value);
    }
}
