using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Segment1>))]
public sealed record Segment1 : OpenStringEnum<Segment1>
{
    private Segment1(string value) : base(value)
    {
    }

    public static readonly Segment1 Sec = new("SEC");

    public static readonly Segment1 Com = new("COM");

    public TResult Match<TResult>(Func<TResult> onSec, Func<TResult> onCom, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sec => onSec(),
            _ when this == Com => onCom(),
            _ => otherwise(Value)
        };

    public void Match(Action onSec, Action onCom, Action<string> otherwise)
    {
        if (this == Sec) onSec();
        else if (this == Com) onCom();
        else otherwise(Value);
    }
}
