using System.Text.Json.Serialization;
using EinsteinBots.Models.Enums;

namespace EinsteinBots.Models;

public record SessionEndedResponseMessage
{
    /// <summary>
    /// Message type informing that the session ended.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "sessionEnded";

    /// <summary>
    /// UUID that references this message.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Reason the session ended.
    /// </summary>
    [JsonPropertyName("reason")]
    public required Reason Reason { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedule")]
    public Schedule? Schedule { get; init; }

    /// <summary>
    /// unique ID to identify the generation, used to submit feedback
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("feedbackId")]
    public string? FeedbackId { get; init; }
}
