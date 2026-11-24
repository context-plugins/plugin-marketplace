using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record DetectPiiEntitiesRequestAmazonComprehendOperationsApi
{
    /// <summary>
    /// A UTF-8 text string. The maximum string size is 100 KB.
    /// </summary>
    [JsonPropertyName("Text")]
    public required string Text { get; init; }

    /// <summary>
    /// The language of the input text. Enter the language code for English (en) or Spanish (es).
    /// </summary>
    [JsonPropertyName("LanguageCode")]
    public required LanguageCode3AmazonComprehendOperationsApi LanguageCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
