using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The interval to retrieve events for. Takes precedence over start and end. If undefined, defaults to 24h.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IntervalCodeqrIoEventsApi>))]
public sealed record IntervalCodeqrIoEventsApi : OpenStringEnum<IntervalCodeqrIoEventsApi>
{
    private IntervalCodeqrIoEventsApi(string value) : base(value)
    {
    }

    public static readonly IntervalCodeqrIoEventsApi _24H = new("24h");

    public static readonly IntervalCodeqrIoEventsApi _7D = new("7d");

    public static readonly IntervalCodeqrIoEventsApi _30D = new("30d");

    public static readonly IntervalCodeqrIoEventsApi _90D = new("90d");

    public static readonly IntervalCodeqrIoEventsApi Ytd = new("ytd");

    public static readonly IntervalCodeqrIoEventsApi _1Y = new("1y");

    public static readonly IntervalCodeqrIoEventsApi All = new("all");

    public TResult Match<TResult>(Func<TResult> on_24H,
        Func<TResult> on_7D,
        Func<TResult> on_30D,
        Func<TResult> on_90D,
        Func<TResult> onYtd,
        Func<TResult> on_1Y,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _24H => on_24H(),
            _ when this == _7D => on_7D(),
            _ when this == _30D => on_30D(),
            _ when this == _90D => on_90D(),
            _ when this == Ytd => onYtd(),
            _ when this == _1Y => on_1Y(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action on_24H,
        Action on_7D,
        Action on_30D,
        Action on_90D,
        Action onYtd,
        Action on_1Y,
        Action onAll,
        Action<string> otherwise)
    {
        if (this == _24H) on_24H();
        else if (this == _7D) on_7D();
        else if (this == _30D) on_30D();
        else if (this == _90D) on_90D();
        else if (this == Ytd) onYtd();
        else if (this == _1Y) on_1Y();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
