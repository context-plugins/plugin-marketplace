using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record SentimentAnalysisSettings
{
    /// <summary>
    /// Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user utterances.
    /// </summary>
    [JsonPropertyName("detectSentiment")]
    public required bool DetectSentiment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
