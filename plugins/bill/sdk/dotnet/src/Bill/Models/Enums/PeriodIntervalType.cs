using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// PeriodIntervalType.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PeriodIntervalType>))]
public sealed record PeriodIntervalType : OpenStringEnum<PeriodIntervalType>
{
    private PeriodIntervalType(string value) : base(value)
    {
    }

    public static readonly PeriodIntervalType None = new("NONE");

    public static readonly PeriodIntervalType Daily = new("DAILY");

    public static readonly PeriodIntervalType Weekly = new("WEEKLY");

    public static readonly PeriodIntervalType Monthly = new("MONTHLY");

    public static readonly PeriodIntervalType Quarterly = new("QUARTERLY");

    public static readonly PeriodIntervalType Yearly = new("YEARLY");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onDaily,
        Func<TResult> onWeekly,
        Func<TResult> onMonthly,
        Func<TResult> onQuarterly,
        Func<TResult> onYearly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Daily => onDaily(),
            _ when this == Weekly => onWeekly(),
            _ when this == Monthly => onMonthly(),
            _ when this == Quarterly => onQuarterly(),
            _ when this == Yearly => onYearly(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone,
        Action onDaily,
        Action onWeekly,
        Action onMonthly,
        Action onQuarterly,
        Action onYearly,
        Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Daily) onDaily();
        else if (this == Weekly) onWeekly();
        else if (this == Monthly) onMonthly();
        else if (this == Quarterly) onQuarterly();
        else if (this == Yearly) onYearly();
        else otherwise(Value);
    }
}
