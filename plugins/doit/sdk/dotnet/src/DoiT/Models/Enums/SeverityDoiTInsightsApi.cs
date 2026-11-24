using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The severity level of the finding. Computed server-side from the security risk counts.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SeverityDoiTInsightsApi>))]
public sealed record SeverityDoiTInsightsApi : OpenStringEnum<SeverityDoiTInsightsApi>
{
    private SeverityDoiTInsightsApi(string value) : base(value)
    {
    }

    public static readonly SeverityDoiTInsightsApi Critical = new("critical");

    public static readonly SeverityDoiTInsightsApi High = new("high");

    public static readonly SeverityDoiTInsightsApi Medium = new("medium");

    public static readonly SeverityDoiTInsightsApi Low = new("low");

    public TResult Match<TResult>(Func<TResult> onCritical,
        Func<TResult> onHigh,
        Func<TResult> onMedium,
        Func<TResult> onLow,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Critical => onCritical(),
            _ when this == High => onHigh(),
            _ when this == Medium => onMedium(),
            _ when this == Low => onLow(),
            _ => otherwise(Value)
        };

    public void Match(Action onCritical, Action onHigh, Action onMedium, Action onLow, Action<string> otherwise)
    {
        if (this == Critical) onCritical();
        else if (this == High) onHigh();
        else if (this == Medium) onMedium();
        else if (this == Low) onLow();
        else otherwise(Value);
    }
}
