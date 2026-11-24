using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record FeedbackItem
{
    /// <summary>
    /// A code identifying the condition that was detected during the Face Liveness session.
    /// </summary>
    [JsonPropertyName("Code")]
    public required Code Code { get; init; }

    /// <summary>
    /// A human-readable description of the detected condition, suitable for displaying to an end user before they retry a Face Liveness check. Use Code rather than this message for programmatic decisions, because the message text can change.
    /// </summary>
    [JsonPropertyName("Message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
