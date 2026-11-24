using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Processing priority of the queue item
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Priority1>))]
public sealed record Priority1 : OpenStringEnum<Priority1>
{
    private Priority1(string value) : base(value)
    {
    }

    public static readonly Priority1 Low = new("Low");

    public static readonly Priority1 Normal = new("Normal");

    public static readonly Priority1 High = new("High");

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
