using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FreshnessDiffDiagnosticsV4UnitOfTimeDto>))]
public sealed record FreshnessDiffDiagnosticsV4UnitOfTimeDto : OpenStringEnum<FreshnessDiffDiagnosticsV4UnitOfTimeDto>
{
    private FreshnessDiffDiagnosticsV4UnitOfTimeDto(string value) : base(value)
    {
    }

    public static readonly FreshnessDiffDiagnosticsV4UnitOfTimeDto Minutes = new("minutes");

    public static readonly FreshnessDiffDiagnosticsV4UnitOfTimeDto Hours = new("hours");

    public static readonly FreshnessDiffDiagnosticsV4UnitOfTimeDto Days = new("days");

    public TResult Match<TResult>(Func<TResult> onMinutes,
        Func<TResult> onHours,
        Func<TResult> onDays,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Minutes => onMinutes(),
            _ when this == Hours => onHours(),
            _ when this == Days => onDays(),
            _ => otherwise(Value)
        };

    public void Match(Action onMinutes, Action onHours, Action onDays, Action<string> otherwise)
    {
        if (this == Minutes) onMinutes();
        else if (this == Hours) onHours();
        else if (this == Days) onDays();
        else otherwise(Value);
    }
}
