using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Forecast granularity mode.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode1>))]
public sealed record Mode1 : OpenStringEnum<Mode1>
{
    private Mode1(string value) : base(value)
    {
    }

    public static readonly Mode1 Totals = new("totals");

    public static readonly Mode1 Grouping = new("grouping");

    public TResult Match<TResult>(Func<TResult> onTotals, Func<TResult> onGrouping, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Totals => onTotals(),
            _ when this == Grouping => onGrouping(),
            _ => otherwise(Value)
        };

    public void Match(Action onTotals, Action onGrouping, Action<string> otherwise)
    {
        if (this == Totals) onTotals();
        else if (this == Grouping) onGrouping();
        else otherwise(Value);
    }
}
