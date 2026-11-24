using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Severity>))]
public sealed record Severity : OpenStringEnum<Severity>
{
    private Severity(string value) : base(value)
    {
    }

    public static readonly Severity SeverityUnspecified = new("SEVERITY_UNSPECIFIED");

    public static readonly Severity Low = new("LOW");

    public static readonly Severity Medium = new("MEDIUM");

    public static readonly Severity High = new("HIGH");

    public static readonly Severity Minimal = new("MINIMAL");

    public TResult Match<TResult>(Func<TResult> onSeverityUnspecified,
        Func<TResult> onLow,
        Func<TResult> onMedium,
        Func<TResult> onHigh,
        Func<TResult> onMinimal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SeverityUnspecified => onSeverityUnspecified(),
            _ when this == Low => onLow(),
            _ when this == Medium => onMedium(),
            _ when this == High => onHigh(),
            _ when this == Minimal => onMinimal(),
            _ => otherwise(Value)
        };

    public void Match(Action onSeverityUnspecified,
        Action onLow,
        Action onMedium,
        Action onHigh,
        Action onMinimal,
        Action<string> otherwise)
    {
        if (this == SeverityUnspecified) onSeverityUnspecified();
        else if (this == Low) onLow();
        else if (this == Medium) onMedium();
        else if (this == High) onHigh();
        else if (this == Minimal) onMinimal();
        else otherwise(Value);
    }
}
