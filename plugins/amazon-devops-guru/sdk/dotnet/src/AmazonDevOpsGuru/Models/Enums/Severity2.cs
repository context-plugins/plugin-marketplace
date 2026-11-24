using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The severity of the insight. For more information, see Understanding insight severities in the Amazon DevOps Guru User Guide.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Severity2>))]
public sealed record Severity2 : OpenStringEnum<Severity2>
{
    private Severity2(string value) : base(value)
    {
    }

    public static readonly Severity2 Low = new("LOW");

    public static readonly Severity2 Medium = new("MEDIUM");

    public static readonly Severity2 High = new("HIGH");

    public TResult Match<TResult>(Func<TResult> onLow,
        Func<TResult> onMedium,
        Func<TResult> onHigh,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Low => onLow(),
            _ when this == Medium => onMedium(),
            _ when this == High => onHigh(),
            _ => otherwise(Value)
        };

    public void Match(Action onLow, Action onMedium, Action onHigh, Action<string> otherwise)
    {
        if (this == Low) onLow();
        else if (this == Medium) onMedium();
        else if (this == High) onHigh();
        else otherwise(Value);
    }
}
