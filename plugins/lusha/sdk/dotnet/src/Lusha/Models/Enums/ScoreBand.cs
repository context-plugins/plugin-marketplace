using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

/// <summary>
/// Qualitative score band.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ScoreBand>))]
public sealed record ScoreBand : OpenStringEnum<ScoreBand>
{
    private ScoreBand(string value) : base(value)
    {
    }

    public static readonly ScoreBand Cold = new("cold");

    public static readonly ScoreBand Warm = new("warm");

    public static readonly ScoreBand Hot = new("hot");

    public TResult Match<TResult>(Func<TResult> onCold,
        Func<TResult> onWarm,
        Func<TResult> onHot,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Cold => onCold(),
            _ when this == Warm => onWarm(),
            _ when this == Hot => onHot(),
            _ => otherwise(Value)
        };

    public void Match(Action onCold, Action onWarm, Action onHot, Action<string> otherwise)
    {
        if (this == Cold) onCold();
        else if (this == Warm) onWarm();
        else if (this == Hot) onHot();
        else otherwise(Value);
    }
}
