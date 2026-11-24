using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

/// <summary>
/// A subscribers' journey through an automation flow.
/// </summary>
public record AutomationJourney
{
    /// <summary>
    /// The prefixed automation journey id
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The prefixed automation id
    /// </summary>
    [JsonPropertyName("automation_id")]
    public required string AutomationId { get; init; }

    /// <summary>
    /// The prefixed ID of the subscription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_id")]
    public string? SubscriptionId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    [JsonPropertyName("status")]
    public required AutomationJourneyStatus Status { get; init; }

    /// <summary>
    /// The time that the subscriber started their flow through the automation. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("started_at")]
    public int? StartedAt { get; init; }

    /// <summary>
    /// The time that the subscriber finished their flow through the automation. Measured in seconds since the Unix epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_at")]
    public int? CompletedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
