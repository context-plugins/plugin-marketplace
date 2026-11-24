using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record DetectTargetedSentimentRequest
{
    /// <summary>
    /// A UTF-8 text string. The maximum string length is 5 KB.
    /// </summary>
    [JsonPropertyName("Text")]
    public required string Text { get; init; }

    /// <summary>
    /// The language of the input documents. Currently, English is the only supported language.
    /// </summary>
    [JsonPropertyName("LanguageCode")]
    public required LanguageCode4 LanguageCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
