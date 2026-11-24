using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record ContainsPiiEntitiesRequest
{
    /// <summary>
    /// A UTF-8 text string. The maximum string size is 100 KB.
    /// </summary>
    [JsonPropertyName("Text")]
    public required string Text { get; init; }

    /// <summary>
    /// The language of the input documents.
    /// </summary>
    [JsonPropertyName("LanguageCode")]
    public required LanguageCode5 LanguageCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
