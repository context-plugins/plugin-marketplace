using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Severity4>))]
public sealed record Severity4 : OpenStringEnum<Severity4>
{
    private Severity4(string value) : base(value)
    {
    }

    public static readonly Severity4 Low = new("LOW");

    public static readonly Severity4 Medium = new("MEDIUM");

    public static readonly Severity4 High = new("HIGH");

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
