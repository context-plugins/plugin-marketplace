using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Interval>))]
public sealed record Interval : OpenStringEnum<Interval>
{
    private Interval(string value) : base(value)
    {
    }

    public static readonly Interval Daily = new("Daily");

    public static readonly Interval Weekly = new("Weekly");

    public static readonly Interval Monthly = new("Monthly");

    public TResult Match<TResult>(Func<TResult> onDaily,
        Func<TResult> onWeekly,
        Func<TResult> onMonthly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Daily => onDaily(),
            _ when this == Weekly => onWeekly(),
            _ when this == Monthly => onMonthly(),
            _ => otherwise(Value)
        };

    public void Match(Action onDaily, Action onWeekly, Action onMonthly, Action<string> otherwise)
    {
        if (this == Daily) onDaily();
        else if (this == Weekly) onWeekly();
        else if (this == Monthly) onMonthly();
        else otherwise(Value);
    }
}
