using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record BatchDetectTargetedSentimentRequest
{
    /// <summary>
    /// A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB.
    /// </summary>
    [JsonPropertyName("TextList")]
    public required IReadOnlyList<string> TextList { get; init; }

    /// <summary>
    /// The language of the input documents. Currently, English is the only supported language.
    /// </summary>
    [JsonPropertyName("LanguageCode")]
    public required LanguageCode4 LanguageCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
