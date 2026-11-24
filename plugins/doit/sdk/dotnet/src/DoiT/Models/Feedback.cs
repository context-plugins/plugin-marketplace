using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record Feedback
{
    /// <summary>
    /// Whether the feedback is positive or negative.
    /// </summary>
    [JsonPropertyName("positive")]
    public required bool Positive { get; init; }

    /// <summary>
    /// Optional text providing additional feedback details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
