using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Severity of the ticket.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Severity1>))]
public sealed record Severity1 : OpenStringEnum<Severity1>
{
    private Severity1(string value) : base(value)
    {
    }

    public static readonly Severity1 Low = new("low");

    public static readonly Severity1 Normal = new("normal");

    public static readonly Severity1 High = new("high");

    public static readonly Severity1 Urgent = new("urgent");

    public TResult Match<TResult>(Func<TResult> onLow,
        Func<TResult> onNormal,
        Func<TResult> onHigh,
        Func<TResult> onUrgent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Low => onLow(),
            _ when this == Normal => onNormal(),
            _ when this == High => onHigh(),
            _ when this == Urgent => onUrgent(),
            _ => otherwise(Value)
        };

    public void Match(Action onLow, Action onNormal, Action onHigh, Action onUrgent, Action<string> otherwise)
    {
        if (this == Low) onLow();
        else if (this == Normal) onNormal();
        else if (this == High) onHigh();
        else if (this == Urgent) onUrgent();
        else otherwise(Value);
    }
}
