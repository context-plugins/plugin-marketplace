using System;
using System.Text.Json.Serialization;
using Justtrack.Core.Enum;

namespace Justtrack.Models.Enums;

/// <summary>
/// Specifies the unit represented by the value field. <b>Mutually exclusive with currency.</b>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Unit>))]
public sealed record Unit : OpenStringEnum<Unit>
{
    private Unit(string value) : base(value)
    {
    }

    public static readonly Unit Count = new("count");

    public static readonly Unit Seconds = new("seconds");

    public static readonly Unit Milliseconds = new("milliseconds");

    public TResult Match<TResult>(Func<TResult> onCount,
        Func<TResult> onSeconds,
        Func<TResult> onMilliseconds,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Count => onCount(),
            _ when this == Seconds => onSeconds(),
            _ when this == Milliseconds => onMilliseconds(),
            _ => otherwise(Value)
        };

    public void Match(Action onCount, Action onSeconds, Action onMilliseconds, Action<string> otherwise)
    {
        if (this == Count) onCount();
        else if (this == Seconds) onSeconds();
        else if (this == Milliseconds) onMilliseconds();
        else otherwise(Value);
    }
}
