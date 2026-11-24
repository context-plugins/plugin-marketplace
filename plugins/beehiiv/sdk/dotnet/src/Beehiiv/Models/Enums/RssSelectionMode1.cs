using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// How to select feed articles, by count or time window.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RssSelectionMode1>))]
public sealed record RssSelectionMode1 : OpenStringEnum<RssSelectionMode1>
{
    private RssSelectionMode1(string value) : base(value)
    {
    }

    public static readonly RssSelectionMode1 Count = new("count");

    public static readonly RssSelectionMode1 Time = new("time");

    public TResult Match<TResult>(Func<TResult> onCount, Func<TResult> onTime, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Count => onCount(),
            _ when this == Time => onTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onCount, Action onTime, Action<string> otherwise)
    {
        if (this == Count) onCount();
        else if (this == Time) onTime();
        else otherwise(Value);
    }
}
