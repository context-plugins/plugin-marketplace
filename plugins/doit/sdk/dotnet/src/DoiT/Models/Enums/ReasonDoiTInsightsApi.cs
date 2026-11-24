using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The reason for dismissal.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReasonDoiTInsightsApi>))]
public sealed record ReasonDoiTInsightsApi : OpenStringEnum<ReasonDoiTInsightsApi>
{
    private ReasonDoiTInsightsApi(string value) : base(value)
    {
    }

    public static readonly ReasonDoiTInsightsApi NotRelevant = new("not relevant");

    public static readonly ReasonDoiTInsightsApi NotEnoughInformation = new("not enough information");

    public static readonly ReasonDoiTInsightsApi NotWorthTheEffort = new("not worth the effort");

    public static readonly ReasonDoiTInsightsApi InaccurateOptimizationOpportunities = new(
        "inaccurate optimization opportunities");

    public TResult Match<TResult>(Func<TResult> onNotRelevant,
        Func<TResult> onNotEnoughInformation,
        Func<TResult> onNotWorthTheEffort,
        Func<TResult> onInaccurateOptimizationOpportunities,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotRelevant => onNotRelevant(),
            _ when this == NotEnoughInformation => onNotEnoughInformation(),
            _ when this == NotWorthTheEffort => onNotWorthTheEffort(),
            _ when this == InaccurateOptimizationOpportunities => onInaccurateOptimizationOpportunities(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotRelevant,
        Action onNotEnoughInformation,
        Action onNotWorthTheEffort,
        Action onInaccurateOptimizationOpportunities,
        Action<string> otherwise)
    {
        if (this == NotRelevant) onNotRelevant();
        else if (this == NotEnoughInformation) onNotEnoughInformation();
        else if (this == NotWorthTheEffort) onNotWorthTheEffort();
        else if (this == InaccurateOptimizationOpportunities) onInaccurateOptimizationOpportunities();
        else otherwise(Value);
    }
}
