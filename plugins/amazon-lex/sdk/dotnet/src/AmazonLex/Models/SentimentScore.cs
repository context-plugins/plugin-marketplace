using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record SentimentScore
{
    /// <summary>
    /// The level of confidence that Amazon Comprehend has in the accuracy of its detection of the POSITIVE sentiment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("positive")]
    public double? Positive { get; init; }

    /// <summary>
    /// The level of confidence that Amazon Comprehend has in the accuracy of its detection of the NEGATIVE sentiment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("negative")]
    public double? Negative { get; init; }

    /// <summary>
    /// The level of confidence that Amazon Comprehend has in the accuracy of its detection of the NEUTRAL sentiment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("neutral")]
    public double? Neutral { get; init; }

    /// <summary>
    /// The level of confidence that Amazon Comprehend has in the accuracy of its detection of the MIXED sentiment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mixed")]
    public double? Mixed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
