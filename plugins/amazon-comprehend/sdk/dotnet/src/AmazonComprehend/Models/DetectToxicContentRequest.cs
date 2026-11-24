using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record DetectToxicContentRequest
{
    /// <summary>
    /// A list of up to 10 text strings. Each string has a maximum size of 1 KB, and the maximum size of the list is 10 KB.
    /// </summary>
    [JsonPropertyName("TextSegments")]
    public required IReadOnlyList<TextSegment> TextSegments { get; init; }

    /// <summary>
    /// The language of the input text. Currently, English is the only supported language.
    /// </summary>
    [JsonPropertyName("LanguageCode")]
    public required LanguageCode7AmazonComprehendOperationsApi LanguageCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
