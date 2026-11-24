using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Priority level for queue processing
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Priority>))]
public sealed record Priority : OpenStringEnum<Priority>
{
    private Priority(string value) : base(value)
    {
    }

    public static readonly Priority Low = new("Low");

    public static readonly Priority Normal = new("Normal");

    public static readonly Priority High = new("High");

    public TResult Match<TResult>(Func<TResult> onLow,
        Func<TResult> onNormal,
        Func<TResult> onHigh,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Low => onLow(),
            _ when this == Normal => onNormal(),
            _ when this == High => onHigh(),
            _ => otherwise(Value)
        };

    public void Match(Action onLow, Action onNormal, Action onHigh, Action<string> otherwise)
    {
        if (this == Low) onLow();
        else if (this == Normal) onNormal();
        else if (this == High) onHigh();
        else otherwise(Value);
    }
}
