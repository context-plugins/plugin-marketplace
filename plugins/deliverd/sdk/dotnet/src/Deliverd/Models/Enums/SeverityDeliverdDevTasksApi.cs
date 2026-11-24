using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// How serious a failure of this result is: low, medium, high or critical
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SeverityDeliverdDevTasksApi>))]
public sealed record SeverityDeliverdDevTasksApi : OpenStringEnum<SeverityDeliverdDevTasksApi>
{
    private SeverityDeliverdDevTasksApi(string value) : base(value)
    {
    }

    public static readonly SeverityDeliverdDevTasksApi Low = new("low");

    public static readonly SeverityDeliverdDevTasksApi Medium = new("medium");

    public static readonly SeverityDeliverdDevTasksApi High = new("high");

    public static readonly SeverityDeliverdDevTasksApi Critical = new("critical");

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
