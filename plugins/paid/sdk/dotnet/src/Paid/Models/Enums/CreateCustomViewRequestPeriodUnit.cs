using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

/// <summary>
/// relative only: the unit of the rolling window.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CreateCustomViewRequestPeriodUnit>))]
public sealed record CreateCustomViewRequestPeriodUnit : OpenStringEnum<CreateCustomViewRequestPeriodUnit>
{
    private CreateCustomViewRequestPeriodUnit(string value) : base(value)
    {
    }

    public static readonly CreateCustomViewRequestPeriodUnit Day = new("day");

    public static readonly CreateCustomViewRequestPeriodUnit Month = new("month");

    public static readonly CreateCustomViewRequestPeriodUnit Year = new("year");

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
