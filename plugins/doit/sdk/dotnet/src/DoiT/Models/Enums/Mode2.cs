using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Time range mode (last N periods, current period, or custom).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode2>))]
public sealed record Mode2 : OpenStringEnum<Mode2>
{
    private Mode2(string value) : base(value)
    {
    }

    public static readonly Mode2 Last = new("last");

    public static readonly Mode2 Current = new("current");

    public static readonly Mode2 Custom = new("custom");

    public TResult Match<TResult>(Func<TResult> onLast,
        Func<TResult> onCurrent,
        Func<TResult> onCustom,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Last => onLast(),
            _ when this == Current => onCurrent(),
            _ when this == Custom => onCustom(),
            _ => otherwise(Value)
        };

    public void Match(Action onLast, Action onCurrent, Action onCustom, Action<string> otherwise)
    {
        if (this == Last) onLast();
        else if (this == Current) onCurrent();
        else if (this == Custom) onCustom();
        else otherwise(Value);
    }
}
