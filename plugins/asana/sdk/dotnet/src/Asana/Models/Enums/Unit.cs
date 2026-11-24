using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// A supported unit of measure for the goal metric, or none.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Unit>))]
public sealed record Unit : OpenStringEnum<Unit>
{
    private Unit(string value) : base(value)
    {
    }

    public static readonly Unit None = new("none");

    public static readonly Unit Currency = new("currency");

    public static readonly Unit Percentage = new("percentage");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onCurrency,
        Func<TResult> onPercentage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Currency => onCurrency(),
            _ when this == Percentage => onPercentage(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onCurrency, Action onPercentage, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Currency) onCurrency();
        else if (this == Percentage) onPercentage();
        else otherwise(Value);
    }
}
