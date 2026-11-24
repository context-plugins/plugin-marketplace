using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record SentimentScore
{
    /// <summary>
    /// The level of confidence that Amazon Comprehend has in the accuracy of its detection of the POSITIVE sentiment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Positive")]
    public double? Positive { get; init; }

    /// <summary>
    /// The level of confidence that Amazon Comprehend has in the accuracy of its detection of the NEGATIVE sentiment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Negative")]
    public double? Negative { get; init; }

    /// <summary>
    /// The level of confidence that Amazon Comprehend has in the accuracy of its detection of the NEUTRAL sentiment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Neutral")]
    public double? Neutral { get; init; }

    /// <summary>
    /// The level of confidence that Amazon Comprehend has in the accuracy of its detection of the MIXED sentiment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Mixed")]
    public double? Mixed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
