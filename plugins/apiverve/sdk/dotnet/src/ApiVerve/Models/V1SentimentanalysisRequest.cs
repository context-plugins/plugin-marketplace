using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1SentimentanalysisRequest
{
    /// <summary>
    /// The text to analyze the sentiment of
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
