using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record SentimentResponse
{
    /// <summary>
    /// The overall sentiment expressed in the user's response. This is the sentiment most likely expressed by the user based on the analysis by Amazon Comprehend.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sentiment")]
    public Sentiment? Sentiment { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sentimentScore")]
    public SentimentScore? SentimentScore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
