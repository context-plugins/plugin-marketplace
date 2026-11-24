using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Period for scheduling a recurring bill.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PeriodRequest>))]
public sealed record PeriodRequest : OpenStringEnum<PeriodRequest>
{
    private PeriodRequest(string value) : base(value)
    {
    }

    public static readonly PeriodRequest Daily = new("DAILY");

    public static readonly PeriodRequest Weekly = new("WEEKLY");

    public static readonly PeriodRequest Monthly = new("MONTHLY");

    public static readonly PeriodRequest Yearly = new("YEARLY");

    public static readonly PeriodRequest None = new("NONE");

    public TResult Match<TResult>(Func<TResult> onDaily,
        Func<TResult> onWeekly,
        Func<TResult> onMonthly,
        Func<TResult> onYearly,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Daily => onDaily(),
            _ when this == Weekly => onWeekly(),
            _ when this == Monthly => onMonthly(),
            _ when this == Yearly => onYearly(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onDaily,
        Action onWeekly,
        Action onMonthly,
        Action onYearly,
        Action onNone,
        Action<string> otherwise)
    {
        if (this == Daily) onDaily();
        else if (this == Weekly) onWeekly();
        else if (this == Monthly) onMonthly();
        else if (this == Yearly) onYearly();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
