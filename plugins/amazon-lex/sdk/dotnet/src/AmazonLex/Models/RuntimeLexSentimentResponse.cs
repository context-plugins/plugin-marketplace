using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record RuntimeLexSentimentResponse
{
    /// <summary>
    /// The inferred sentiment that Amazon Comprehend has the highest confidence in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sentimentLabel")]
    public string? SentimentLabel { get; init; }

    /// <summary>
    /// The likelihood that the sentiment was correctly inferred.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sentimentScore")]
    public string? SentimentScore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
