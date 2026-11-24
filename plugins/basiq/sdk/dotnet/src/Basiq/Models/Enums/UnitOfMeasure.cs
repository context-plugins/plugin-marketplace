using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The unit of measure that applies to the minimumValue and maximumValue values e.g. a DOLLAR amount. PERCENT (in the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of MONTH's or DAY's (in the case of term deposit tiers).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<UnitOfMeasure>))]
public sealed record UnitOfMeasure : OpenStringEnum<UnitOfMeasure>
{
    private UnitOfMeasure(string value) : base(value)
    {
    }

    public static readonly UnitOfMeasure Day = new("DAY");

    public static readonly UnitOfMeasure Dollar = new("DOLLAR");

    public static readonly UnitOfMeasure Month = new("MONTH");

    public static readonly UnitOfMeasure Percent = new("PERCENT");

    public TResult Match<TResult>(Func<TResult> onDay,
        Func<TResult> onDollar,
        Func<TResult> onMonth,
        Func<TResult> onPercent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Day => onDay(),
            _ when this == Dollar => onDollar(),
            _ when this == Month => onMonth(),
            _ when this == Percent => onPercent(),
            _ => otherwise(Value)
        };

    public void Match(Action onDay, Action onDollar, Action onMonth, Action onPercent, Action<string> otherwise)
    {
        if (this == Day) onDay();
        else if (this == Dollar) onDollar();
        else if (this == Month) onMonth();
        else if (this == Percent) onPercent();
        else otherwise(Value);
    }
}
