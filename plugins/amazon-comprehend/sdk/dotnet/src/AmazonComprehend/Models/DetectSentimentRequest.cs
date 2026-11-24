using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record DetectSentimentRequest
{
    /// <summary>
    /// A UTF-8 text string. The maximum string size is 5 KB.
    /// </summary>
    [JsonPropertyName("Text")]
    public required string Text { get; init; }

    /// <summary>
    /// The language of the input documents. You can specify any of the primary languages supported by Amazon Comprehend. All documents must be in the same language.
    /// </summary>
    [JsonPropertyName("LanguageCode")]
    public required LanguageCode LanguageCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
