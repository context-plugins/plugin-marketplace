using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// low, medium, high or critical. Never lower than the AI system's own
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RiskDeliverdDevTasksApi>))]
public sealed record RiskDeliverdDevTasksApi : OpenStringEnum<RiskDeliverdDevTasksApi>
{
    private RiskDeliverdDevTasksApi(string value) : base(value)
    {
    }

    public static readonly RiskDeliverdDevTasksApi Low = new("low");

    public static readonly RiskDeliverdDevTasksApi Medium = new("medium");

    public static readonly RiskDeliverdDevTasksApi High = new("high");

    public static readonly RiskDeliverdDevTasksApi Critical = new("critical");

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
