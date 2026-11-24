using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortBy1>))]
public sealed record SortBy1 : OpenStringEnum<SortBy1>
{
    private SortBy1(string value) : base(value)
    {
    }

    public static readonly SortBy1 DetectionTime = new("detection_time");

    public static readonly SortBy1 ResolvedTime = new("resolved_time");

    public static readonly SortBy1 AccountId = new("account_id");

    public static readonly SortBy1 Region = new("region");

    public static readonly SortBy1 ResourceClass = new("resource_class");

    public static readonly SortBy1 CostEstimationPotentialSavings = new("cost_estimation_potential_savings");

    public static readonly SortBy1 CostEstimationPotentialIncreasedCosts = new(
        "cost_estimation_potential_increased_costs");

    public static readonly SortBy1 CostEstimationPotentialFreedCommitments = new(
        "cost_estimation_potential_freed_commitments");

    public static readonly SortBy1 CostEstimationPotentialIncreasedCommitmentsRequired = new(
        "cost_estimation_potential_increased_commitments_required");

    public TResult Match<TResult>(Func<TResult> onDetectionTime,
        Func<TResult> onResolvedTime,
        Func<TResult> onAccountId,
        Func<TResult> onRegion,
        Func<TResult> onResourceClass,
        Func<TResult> onCostEstimationPotentialSavings,
        Func<TResult> onCostEstimationPotentialIncreasedCosts,
        Func<TResult> onCostEstimationPotentialFreedCommitments,
        Func<TResult> onCostEstimationPotentialIncreasedCommitmentsRequired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DetectionTime => onDetectionTime(),
            _ when this == ResolvedTime => onResolvedTime(),
            _ when this == AccountId => onAccountId(),
            _ when this == Region => onRegion(),
            _ when this == ResourceClass => onResourceClass(),
            _ when this == CostEstimationPotentialSavings => onCostEstimationPotentialSavings(),
            _ when this == CostEstimationPotentialIncreasedCosts => onCostEstimationPotentialIncreasedCosts(),
            _ when this == CostEstimationPotentialFreedCommitments => onCostEstimationPotentialFreedCommitments(),
            _ when this ==
                CostEstimationPotentialIncreasedCommitmentsRequired => onCostEstimationPotentialIncreasedCommitmentsRequired(),
            _ => otherwise(Value)
        };

    public void Match(Action onDetectionTime,
        Action onResolvedTime,
        Action onAccountId,
        Action onRegion,
        Action onResourceClass,
        Action onCostEstimationPotentialSavings,
        Action onCostEstimationPotentialIncreasedCosts,
        Action onCostEstimationPotentialFreedCommitments,
        Action onCostEstimationPotentialIncreasedCommitmentsRequired,
        Action<string> otherwise)
    {
        if (this == DetectionTime) onDetectionTime();
        else if (this == ResolvedTime) onResolvedTime();
        else if (this == AccountId) onAccountId();
        else if (this == Region) onRegion();
        else if (this == ResourceClass) onResourceClass();
        else if (this == CostEstimationPotentialSavings) onCostEstimationPotentialSavings();
        else if (this == CostEstimationPotentialIncreasedCosts) onCostEstimationPotentialIncreasedCosts();
        else if (this == CostEstimationPotentialFreedCommitments) onCostEstimationPotentialFreedCommitments();
        else if (this ==
            CostEstimationPotentialIncreasedCommitmentsRequired) onCostEstimationPotentialIncreasedCommitmentsRequired();
        else otherwise(Value);
    }
}
