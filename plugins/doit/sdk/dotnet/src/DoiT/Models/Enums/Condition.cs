using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Type of comparison for the alert threshold (used with <c>operator</c> and <c>value</c>). If omitted on create, defaults to <c>percentage-change</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Condition>))]
public sealed record Condition : OpenStringEnum<Condition>
{
    private Condition(string value) : base(value)
    {
    }

    public static readonly Condition ValueMember = new("value");

    public static readonly Condition PercentageChange = new("percentage-change");

    public static readonly Condition Forecast = new("forecast");

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
