using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Time interval for grouping data in the report.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TimeIntervalDoiTReportsApi>))]
public sealed record TimeIntervalDoiTReportsApi : OpenStringEnum<TimeIntervalDoiTReportsApi>
{
    private TimeIntervalDoiTReportsApi(string value) : base(value)
    {
    }

    public static readonly TimeIntervalDoiTReportsApi Hour = new("hour");

    public static readonly TimeIntervalDoiTReportsApi Day = new("day");

    public static readonly TimeIntervalDoiTReportsApi DayCumSum = new("dayCumSum");

    public static readonly TimeIntervalDoiTReportsApi Week = new("week");

    public static readonly TimeIntervalDoiTReportsApi Isoweek = new("isoweek");

    public static readonly TimeIntervalDoiTReportsApi Month = new("month");

    public static readonly TimeIntervalDoiTReportsApi Quarter = new("quarter");

    public static readonly TimeIntervalDoiTReportsApi Year = new("year");

    public static readonly TimeIntervalDoiTReportsApi WeekDay = new("week_day");

    public TResult Match<TResult>(Func<TResult> onHour,
        Func<TResult> onDay,
        Func<TResult> onDayCumSum,
        Func<TResult> onWeek,
        Func<TResult> onIsoweek,
        Func<TResult> onMonth,
        Func<TResult> onQuarter,
        Func<TResult> onYear,
        Func<TResult> onWeekDay,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Hour => onHour(),
            _ when this == Day => onDay(),
            _ when this == DayCumSum => onDayCumSum(),
            _ when this == Week => onWeek(),
            _ when this == Isoweek => onIsoweek(),
            _ when this == Month => onMonth(),
            _ when this == Quarter => onQuarter(),
            _ when this == Year => onYear(),
            _ when this == WeekDay => onWeekDay(),
            _ => otherwise(Value)
        };

    public void Match(Action onHour,
        Action onDay,
        Action onDayCumSum,
        Action onWeek,
        Action onIsoweek,
        Action onMonth,
        Action onQuarter,
        Action onYear,
        Action onWeekDay,
        Action<string> otherwise)
    {
        if (this == Hour) onHour();
        else if (this == Day) onDay();
        else if (this == DayCumSum) onDayCumSum();
        else if (this == Week) onWeek();
        else if (this == Isoweek) onIsoweek();
        else if (this == Month) onMonth();
        else if (this == Quarter) onQuarter();
        else if (this == Year) onYear();
        else if (this == WeekDay) onWeekDay();
        else otherwise(Value);
    }
}
