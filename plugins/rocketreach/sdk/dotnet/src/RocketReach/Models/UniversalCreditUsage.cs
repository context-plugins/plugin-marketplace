using System;
using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

public record UniversalCreditUsage
{
    /// <summary>
    /// Total credits allocated to the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credits_allocated")]
    public int? CreditsAllocated { get; init; }

    /// <summary>
    /// Total credits used by the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credits_used")]
    public int? CreditsUsed { get; init; }

    /// <summary>
    /// Total credits remaining for the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credits_remaining")]
    public int? CreditsRemaining { get; init; }

    /// <summary>
    /// Timestamp of the last sync of the user credit usage data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_synced")]
    public DateTimeOffset? LastSynced { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
