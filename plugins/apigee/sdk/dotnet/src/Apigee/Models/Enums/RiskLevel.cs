using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. Risk level of the incident.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RiskLevel>))]
public sealed record RiskLevel : OpenStringEnum<RiskLevel>
{
    private RiskLevel(string value) : base(value)
    {
    }

    public static readonly RiskLevel RiskLevelUnspecified = new("RISK_LEVEL_UNSPECIFIED");

    public static readonly RiskLevel Low = new("LOW");

    public static readonly RiskLevel Moderate = new("MODERATE");

    public static readonly RiskLevel Severe = new("SEVERE");

    public TResult Match<TResult>(Func<TResult> onRiskLevelUnspecified,
        Func<TResult> onLow,
        Func<TResult> onModerate,
        Func<TResult> onSevere,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RiskLevelUnspecified => onRiskLevelUnspecified(),
            _ when this == Low => onLow(),
            _ when this == Moderate => onModerate(),
            _ when this == Severe => onSevere(),
            _ => otherwise(Value)
        };

    public void Match(Action onRiskLevelUnspecified,
        Action onLow,
        Action onModerate,
        Action onSevere,
        Action<string> otherwise)
    {
        if (this == RiskLevelUnspecified) onRiskLevelUnspecified();
        else if (this == Low) onLow();
        else if (this == Moderate) onModerate();
        else if (this == Severe) onSevere();
        else otherwise(Value);
    }
}
