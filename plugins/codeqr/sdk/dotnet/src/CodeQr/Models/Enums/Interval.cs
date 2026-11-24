using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The interval to retrieve analytics for. Takes precedence over start and end.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Interval>))]
public sealed record Interval : OpenStringEnum<Interval>
{
    private Interval(string value) : base(value)
    {
    }

    public static readonly Interval _1H = new("1h");

    public static readonly Interval _24H = new("24h");

    public static readonly Interval _7D = new("7d");

    public static readonly Interval _30D = new("30d");

    public static readonly Interval _90D = new("90d");

    public static readonly Interval Ytd = new("ytd");

    public static readonly Interval _1Y = new("1y");

    public static readonly Interval All = new("all");

    public static readonly Interval AllUnfiltered = new("all_unfiltered");

    public TResult Match<TResult>(Func<TResult> on_1H,
        Func<TResult> on_24H,
        Func<TResult> on_7D,
        Func<TResult> on_30D,
        Func<TResult> on_90D,
        Func<TResult> onYtd,
        Func<TResult> on_1Y,
        Func<TResult> onAll,
        Func<TResult> onAllUnfiltered,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _1H => on_1H(),
            _ when this == _24H => on_24H(),
            _ when this == _7D => on_7D(),
            _ when this == _30D => on_30D(),
            _ when this == _90D => on_90D(),
            _ when this == Ytd => onYtd(),
            _ when this == _1Y => on_1Y(),
            _ when this == All => onAll(),
            _ when this == AllUnfiltered => onAllUnfiltered(),
            _ => otherwise(Value)
        };

    public void Match(Action on_1H,
        Action on_24H,
        Action on_7D,
        Action on_30D,
        Action on_90D,
        Action onYtd,
        Action on_1Y,
        Action onAll,
        Action onAllUnfiltered,
        Action<string> otherwise)
    {
        if (this == _1H) on_1H();
        else if (this == _24H) on_24H();
        else if (this == _7D) on_7D();
        else if (this == _30D) on_30D();
        else if (this == _90D) on_90D();
        else if (this == Ytd) onYtd();
        else if (this == _1Y) on_1Y();
        else if (this == All) onAll();
        else if (this == AllUnfiltered) onAllUnfiltered();
        else otherwise(Value);
    }
}
