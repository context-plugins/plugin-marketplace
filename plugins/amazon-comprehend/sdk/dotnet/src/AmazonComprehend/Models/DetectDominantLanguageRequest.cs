using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DetectDominantLanguageRequest
{
    /// <summary>
    /// A UTF-8 text string. The string must contain at least 20 characters. The maximum string size is 100 KB.
    /// </summary>
    [JsonPropertyName("Text")]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
