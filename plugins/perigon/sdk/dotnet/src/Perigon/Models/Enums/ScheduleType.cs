using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// Schedule recurrence type. Accepts WEEKLY or MONTHLY and defaults to WEEKLY.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ScheduleType>))]
public sealed record ScheduleType : OpenStringEnum<ScheduleType>
{
    private ScheduleType(string value) : base(value)
    {
    }

    public static readonly ScheduleType Weekly = new("WEEKLY");

    public static readonly ScheduleType Monthly = new("MONTHLY");

    public TResult Match<TResult>(Func<TResult> onWeekly, Func<TResult> onMonthly, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Weekly => onWeekly(),
            _ when this == Monthly => onMonthly(),
            _ => otherwise(Value)
        };

    public void Match(Action onWeekly, Action onMonthly, Action<string> otherwise)
    {
        if (this == Weekly) onWeekly();
        else if (this == Monthly) onMonthly();
        else otherwise(Value);
    }
}
