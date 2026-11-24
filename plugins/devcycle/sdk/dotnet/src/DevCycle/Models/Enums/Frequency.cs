using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Frequency>))]
public sealed record Frequency : OpenStringEnum<Frequency>
{
    private Frequency(string value) : base(value)
    {
    }

    public static readonly Frequency Weekly = new("weekly");

    public static readonly Frequency Biweekly = new("biweekly");

    public static readonly Frequency Monthly = new("monthly");

    public TResult Match<TResult>(Func<TResult> onWeekly,
        Func<TResult> onBiweekly,
        Func<TResult> onMonthly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Weekly => onWeekly(),
            _ when this == Biweekly => onBiweekly(),
            _ when this == Monthly => onMonthly(),
            _ => otherwise(Value)
        };

    public void Match(Action onWeekly, Action onBiweekly, Action onMonthly, Action<string> otherwise)
    {
        if (this == Weekly) onWeekly();
        else if (this == Biweekly) onBiweekly();
        else if (this == Monthly) onMonthly();
        else otherwise(Value);
    }
}
