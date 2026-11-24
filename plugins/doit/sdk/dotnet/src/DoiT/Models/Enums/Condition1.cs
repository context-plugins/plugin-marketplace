using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Omission preserves the saved condition.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Condition1>))]
public sealed record Condition1 : OpenStringEnum<Condition1>
{
    private Condition1(string value) : base(value)
    {
    }

    public static readonly Condition1 ValueMember = new("value");

    public static readonly Condition1 PercentageChange = new("percentage-change");

    public static readonly Condition1 Forecast = new("forecast");

    public TResult Match<TResult>(Func<TResult> onValueMember,
        Func<TResult> onPercentageChange,
        Func<TResult> onForecast,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ValueMember => onValueMember(),
            _ when this == PercentageChange => onPercentageChange(),
            _ when this == Forecast => onForecast(),
            _ => otherwise(Value)
        };

    public void Match(Action onValueMember, Action onPercentageChange, Action onForecast, Action<string> otherwise)
    {
        if (this == ValueMember) onValueMember();
        else if (this == PercentageChange) onPercentageChange();
        else if (this == Forecast) onForecast();
        else otherwise(Value);
    }
}
