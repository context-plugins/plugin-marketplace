using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Plan details for a subscription, indicating whether it is a commitment or flexible plan.
/// </summary>
public record SubscriptionPlan
{
    /// <summary>
    /// The start and end dates of an annual commitment term.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commitmentInterval")]
    public SubscriptionPlanCommitmentInterval? CommitmentInterval { get; init; }

    /// <summary>
    /// Whether this subscription is on an annual commitment plan (true) or a flexible plan (false).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isCommitmentPlan")]
    public bool? IsCommitmentPlan { get; init; }

    /// <summary>
    /// The name of the plan, e.g. ANNUAL_MONTHLY_PAY, ANNUAL_YEARLY_PAY, FLEXIBLE, or TRIAL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("planName")]
    public string? PlanName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
