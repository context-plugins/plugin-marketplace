using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Semantic unit of the column values.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Unit2>))]
public sealed record Unit2 : OpenStringEnum<Unit2>
{
    private Unit2(string value) : base(value)
    {
    }

    public static readonly Unit2 Currency = new("currency");

    public static readonly Unit2 Number = new("number");

    public static readonly Unit2 Percent = new("percent");

    public TResult Match<TResult>(Func<TResult> onCurrency,
        Func<TResult> onNumber,
        Func<TResult> onPercent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Currency => onCurrency(),
            _ when this == Number => onNumber(),
            _ when this == Percent => onPercent(),
            _ => otherwise(Value)
        };

    public void Match(Action onCurrency, Action onNumber, Action onPercent, Action<string> otherwise)
    {
        if (this == Currency) onCurrency();
        else if (this == Number) onNumber();
        else if (this == Percent) onPercent();
        else otherwise(Value);
    }
}
