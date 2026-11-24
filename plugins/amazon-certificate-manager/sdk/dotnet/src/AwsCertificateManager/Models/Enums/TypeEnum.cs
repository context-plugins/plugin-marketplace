using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The time unit for the expiration value.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Minutes = new("MINUTES");

    public static readonly TypeEnum Hours = new("HOURS");

    public static readonly TypeEnum Days = new("DAYS");

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
