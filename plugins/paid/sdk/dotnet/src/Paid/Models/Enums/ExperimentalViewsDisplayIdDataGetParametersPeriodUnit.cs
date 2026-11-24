using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ExperimentalViewsDisplayIdDataGetParametersPeriodUnit>))]
public sealed record ExperimentalViewsDisplayIdDataGetParametersPeriodUnit : OpenStringEnum<ExperimentalViewsDisplayIdDataGetParametersPeriodUnit>
{
    private ExperimentalViewsDisplayIdDataGetParametersPeriodUnit(string value) : base(value)
    {
    }

    public static readonly ExperimentalViewsDisplayIdDataGetParametersPeriodUnit Day = new("day");

    public static readonly ExperimentalViewsDisplayIdDataGetParametersPeriodUnit Month = new("month");

    public static readonly ExperimentalViewsDisplayIdDataGetParametersPeriodUnit Year = new("year");

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
