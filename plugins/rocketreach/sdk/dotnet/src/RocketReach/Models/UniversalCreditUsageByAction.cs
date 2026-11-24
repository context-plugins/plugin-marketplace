using System;
using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

public record UniversalCreditUsageByAction
{
    /// <summary>
    /// The credit action being tracked. One of <c>PersonSearch</c>, <c>CompanySearch</c>, <c>ProfessionalEmailEnrichment</c>, <c>PersonalEmailEnrichment</c>, <c>PhoneEnrichment</c>, <c>PersonEnrichment</c>, <c>CompanyEnrichment</c>, <c>HealthcareEnrichment</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credit_action")]
    public string? CreditAction { get; init; }

    /// <summary>
    /// Number of attempted credit actions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attempted_count")]
    public int? AttemptedCount { get; init; }

    /// <summary>
    /// Number of successful credit actions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("succeeded_count")]
    public int? SucceededCount { get; init; }

    /// <summary>
    /// Total credits used by this credit action
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credits_used")]
    public int? CreditsUsed { get; init; }

    /// <summary>
    /// Timestamp of the last sync of the user credit usage by action data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_synced")]
    public DateTimeOffset? LastSynced { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
