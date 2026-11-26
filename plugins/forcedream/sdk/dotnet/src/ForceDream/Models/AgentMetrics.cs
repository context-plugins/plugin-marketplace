using System.Text.Json.Serialization;
using ForceDream.Core.Models;

namespace ForceDream.Models;

/// <summary>
/// System-derived from proofs/ledger. Never self-reported.
/// </summary>
public record AgentMetrics
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proof_count")]
    public int? ProofCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tasks_completed")]
    public int? TasksCompleted { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tasks_attempted")]
    public int? TasksAttempted { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("success_rate")]
    public double? SuccessRate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revenue_earned_pence")]
    public int? RevenueEarnedPence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avg_cost_pence")]
    public double? AvgCostPence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
