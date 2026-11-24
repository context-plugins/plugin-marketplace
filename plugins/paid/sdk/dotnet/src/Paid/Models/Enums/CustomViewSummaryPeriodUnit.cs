using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

/// <summary>
/// relative only: the unit of the rolling window.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CustomViewSummaryPeriodUnit>))]
public sealed record CustomViewSummaryPeriodUnit : OpenStringEnum<CustomViewSummaryPeriodUnit>
{
    private CustomViewSummaryPeriodUnit(string value) : base(value)
    {
    }

    public static readonly CustomViewSummaryPeriodUnit Day = new("day");

    public static readonly CustomViewSummaryPeriodUnit Month = new("month");

    public static readonly CustomViewSummaryPeriodUnit Year = new("year");

    public TResult Match<TResult>(Func<TResult> onDay,
        Func<TResult> onMonth,
        Func<TResult> onYear,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Day => onDay(),
            _ when this == Month => onMonth(),
            _ when this == Year => onYear(),
            _ => otherwise(Value)
        };

    public void Match(Action onDay, Action onMonth, Action onYear, Action<string> otherwise)
    {
        if (this == Day) onDay();
        else if (this == Month) onMonth();
        else if (this == Year) onYear();
        else otherwise(Value);
    }
}
