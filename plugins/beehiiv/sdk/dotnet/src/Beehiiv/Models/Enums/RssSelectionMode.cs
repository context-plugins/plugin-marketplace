using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// How feed articles are selected, by count or time window.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RssSelectionMode>))]
public sealed record RssSelectionMode : OpenStringEnum<RssSelectionMode>
{
    private RssSelectionMode(string value) : base(value)
    {
    }

    public static readonly RssSelectionMode Count = new("count");

    public static readonly RssSelectionMode Time = new("time");

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
