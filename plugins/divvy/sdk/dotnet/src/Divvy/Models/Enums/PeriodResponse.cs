using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Period for scheduling a recurring bill.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PeriodResponse>))]
public sealed record PeriodResponse : OpenStringEnum<PeriodResponse>
{
    private PeriodResponse(string value) : base(value)
    {
    }

    public static readonly PeriodResponse Daily = new("DAILY");

    public static readonly PeriodResponse Weekly = new("WEEKLY");

    public static readonly PeriodResponse Monthly = new("MONTHLY");

    public static readonly PeriodResponse Yearly = new("YEARLY");

    public static readonly PeriodResponse None = new("NONE");

    public static readonly PeriodResponse Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onDaily,
        Func<TResult> onWeekly,
        Func<TResult> onMonthly,
        Func<TResult> onYearly,
        Func<TResult> onNone,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Daily => onDaily(),
            _ when this == Weekly => onWeekly(),
            _ when this == Monthly => onMonthly(),
            _ when this == Yearly => onYearly(),
            _ when this == None => onNone(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onDaily,
        Action onWeekly,
        Action onMonthly,
        Action onYearly,
        Action onNone,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Daily) onDaily();
        else if (this == Weekly) onWeekly();
        else if (this == Monthly) onMonthly();
        else if (this == Yearly) onYearly();
        else if (this == None) onNone();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
