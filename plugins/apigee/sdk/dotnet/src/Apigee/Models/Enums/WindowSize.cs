using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Time buckets to group the stats by.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<WindowSize>))]
public sealed record WindowSize : OpenStringEnum<WindowSize>
{
    private WindowSize(string value) : base(value)
    {
    }

    public static readonly WindowSize WindowSizeUnspecified = new("WINDOW_SIZE_UNSPECIFIED");

    public static readonly WindowSize Minute = new("MINUTE");

    public static readonly WindowSize Hour = new("HOUR");

    public static readonly WindowSize Day = new("DAY");

    public static readonly WindowSize Month = new("MONTH");

    public TResult Match<TResult>(Func<TResult> onWindowSizeUnspecified,
        Func<TResult> onMinute,
        Func<TResult> onHour,
        Func<TResult> onDay,
        Func<TResult> onMonth,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == WindowSizeUnspecified => onWindowSizeUnspecified(),
            _ when this == Minute => onMinute(),
            _ when this == Hour => onHour(),
            _ when this == Day => onDay(),
            _ when this == Month => onMonth(),
            _ => otherwise(Value)
        };

    public void Match(Action onWindowSizeUnspecified,
        Action onMinute,
        Action onHour,
        Action onDay,
        Action onMonth,
        Action<string> otherwise)
    {
        if (this == WindowSizeUnspecified) onWindowSizeUnspecified();
        else if (this == Minute) onMinute();
        else if (this == Hour) onHour();
        else if (this == Day) onDay();
        else if (this == Month) onMonth();
        else otherwise(Value);
    }
}
