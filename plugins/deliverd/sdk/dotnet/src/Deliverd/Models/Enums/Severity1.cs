using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// high or critical closes the governance gate until a person resolves it
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Severity1>))]
public sealed record Severity1 : OpenStringEnum<Severity1>
{
    private Severity1(string value) : base(value)
    {
    }

    public static readonly Severity1 Low = new("low");

    public static readonly Severity1 Medium = new("medium");

    public static readonly Severity1 High = new("high");

    public static readonly Severity1 Critical = new("critical");

    public TResult Match<TResult>(Func<TResult> onLow,
        Func<TResult> onMedium,
        Func<TResult> onHigh,
        Func<TResult> onCritical,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Low => onLow(),
            _ when this == Medium => onMedium(),
            _ when this == High => onHigh(),
            _ when this == Critical => onCritical(),
            _ => otherwise(Value)
        };

    public void Match(Action onLow, Action onMedium, Action onHigh, Action onCritical, Action<string> otherwise)
    {
        if (this == Low) onLow();
        else if (this == Medium) onMedium();
        else if (this == High) onHigh();
        else if (this == Critical) onCritical();
        else otherwise(Value);
    }
}
