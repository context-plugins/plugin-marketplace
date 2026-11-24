using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The discriminator property that determines which fields are populated in the 'result' object.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResultType>))]
public sealed record ResultType : OpenStringEnum<ResultType>
{
    private ResultType(string value) : base(value)
    {
    }

    public static readonly ResultType SecurityRisk = new("security_risk");

    public static readonly ResultType PotentialDailySavings = new("potential_daily_savings");

    public static readonly ResultType PotentialDailySavingsWithRecommendation = new(
        "potential_daily_savings_with_recommendation");

    public static readonly ResultType PotentialDailySavingsWithClusterAgent = new(
        "potential_daily_savings_with_cluster_agent");

    public TResult Match<TResult>(Func<TResult> onSecurityRisk,
        Func<TResult> onPotentialDailySavings,
        Func<TResult> onPotentialDailySavingsWithRecommendation,
        Func<TResult> onPotentialDailySavingsWithClusterAgent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SecurityRisk => onSecurityRisk(),
            _ when this == PotentialDailySavings => onPotentialDailySavings(),
            _ when this == PotentialDailySavingsWithRecommendation => onPotentialDailySavingsWithRecommendation(),
            _ when this == PotentialDailySavingsWithClusterAgent => onPotentialDailySavingsWithClusterAgent(),
            _ => otherwise(Value)
        };

    public void Match(Action onSecurityRisk,
        Action onPotentialDailySavings,
        Action onPotentialDailySavingsWithRecommendation,
        Action onPotentialDailySavingsWithClusterAgent,
        Action<string> otherwise)
    {
        if (this == SecurityRisk) onSecurityRisk();
        else if (this == PotentialDailySavings) onPotentialDailySavings();
        else if (this == PotentialDailySavingsWithRecommendation) onPotentialDailySavingsWithRecommendation();
        else if (this == PotentialDailySavingsWithClusterAgent) onPotentialDailySavingsWithClusterAgent();
        else otherwise(Value);
    }
}
