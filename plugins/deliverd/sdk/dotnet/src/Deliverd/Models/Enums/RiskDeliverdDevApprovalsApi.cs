using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// How the approver should weigh it; medium when omitted
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RiskDeliverdDevApprovalsApi>))]
public sealed record RiskDeliverdDevApprovalsApi : OpenStringEnum<RiskDeliverdDevApprovalsApi>
{
    private RiskDeliverdDevApprovalsApi(string value) : base(value)
    {
    }

    public static readonly RiskDeliverdDevApprovalsApi Low = new("low");

    public static readonly RiskDeliverdDevApprovalsApi Medium = new("medium");

    public static readonly RiskDeliverdDevApprovalsApi High = new("high");

    public static readonly RiskDeliverdDevApprovalsApi Critical = new("critical");

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
