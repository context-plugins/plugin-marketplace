using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Models;

namespace JuriSign.Models;

public record Data
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("plan")]
    public string? Plan { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credits_total")]
    public int? CreditsTotal { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credits_used")]
    public int? CreditsUsed { get; init; }

    /// <summary>
    /// Never negative, even if usage exceeds the plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credits_remaining")]
    public int? CreditsRemaining { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trial_ends_at")]
    public DateTimeOffset? TrialEndsAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
