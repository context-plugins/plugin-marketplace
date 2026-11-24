using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// The data state to be fetched, can be full or all, the latter including full and partial data.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataState>))]
public sealed record DataState : OpenStringEnum<DataState>
{
    private DataState(string value) : base(value)
    {
    }

    public static readonly DataState DataStateUnspecified = new("DATA_STATE_UNSPECIFIED");

    public static readonly DataState Final = new("FINAL");

    public static readonly DataState All = new("ALL");

    public static readonly DataState HourlyAll = new("HOURLY_ALL");

    public TResult Match<TResult>(Func<TResult> onDataStateUnspecified,
        Func<TResult> onFinal,
        Func<TResult> onAll,
        Func<TResult> onHourlyAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DataStateUnspecified => onDataStateUnspecified(),
            _ when this == Final => onFinal(),
            _ when this == All => onAll(),
            _ when this == HourlyAll => onHourlyAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onDataStateUnspecified,
        Action onFinal,
        Action onAll,
        Action onHourlyAll,
        Action<string> otherwise)
    {
        if (this == DataStateUnspecified) onDataStateUnspecified();
        else if (this == Final) onFinal();
        else if (this == All) onAll();
        else if (this == HourlyAll) onHourlyAll();
        else otherwise(Value);
    }
}
