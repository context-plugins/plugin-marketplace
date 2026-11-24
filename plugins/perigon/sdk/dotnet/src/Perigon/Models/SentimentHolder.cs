using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Aggregate sentiment scores for the story.
/// </summary>
public record SentimentHolder
{
    /// <summary>
    /// Positive sentiment score from 0 to 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("positive")]
    public double? Positive { get; init; }

    /// <summary>
    /// Negative sentiment score from 0 to 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("negative")]
    public double? Negative { get; init; }

    /// <summary>
    /// Neutral sentiment score from 0 to 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("neutral")]
    public double? Neutral { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
