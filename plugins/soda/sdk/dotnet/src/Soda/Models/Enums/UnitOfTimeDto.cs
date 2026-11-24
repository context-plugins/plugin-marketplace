using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<UnitOfTimeDto>))]
public sealed record UnitOfTimeDto : OpenStringEnum<UnitOfTimeDto>
{
    private UnitOfTimeDto(string value) : base(value)
    {
    }

    public static readonly UnitOfTimeDto Hours = new("hours");

    public static readonly UnitOfTimeDto Days = new("days");

    public static readonly UnitOfTimeDto Weeks = new("weeks");

    public TResult Match<TResult>(Func<TResult> onHours,
        Func<TResult> onDays,
        Func<TResult> onWeeks,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Hours => onHours(),
            _ when this == Days => onDays(),
            _ when this == Weeks => onWeeks(),
            _ => otherwise(Value)
        };

    public void Match(Action onHours, Action onDays, Action onWeeks, Action<string> otherwise)
    {
        if (this == Hours) onHours();
        else if (this == Days) onDays();
        else if (this == Weeks) onWeeks();
        else otherwise(Value);
    }
}
