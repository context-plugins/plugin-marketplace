using System.Collections.Generic;
using System.Text.Json.Serialization;
using EinsteinBots.Core.Models;

namespace EinsteinBots.Models;

public record EscalateResponseMessage
{
    /// <summary>
    /// Message type of an escalation message.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "escalate";

    /// <summary>
    /// UUID that references this message.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedule")]
    public Schedule? Schedule { get; init; }

    /// <summary>
    /// unique ID to identify the generation, used to submit feedback
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("feedbackId")]
    public string? FeedbackId { get; init; }

    /// <summary>
    /// Array of transfer targets.
    /// </summary>
    [JsonPropertyName("targets")]
    public required IReadOnlyList<Target> Targets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
