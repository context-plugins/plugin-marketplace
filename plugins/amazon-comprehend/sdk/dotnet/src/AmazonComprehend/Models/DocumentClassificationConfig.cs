using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record DocumentClassificationConfig
{
    /// <summary>
    /// Classification mode indicates whether the documents are MULTI_CLASS or MULTI_LABEL.
    /// </summary>
    [JsonPropertyName("Mode")]
    public required Mode1 Mode { get; init; }

    /// <summary>
    /// One or more labels to associate with the custom classifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Labels")]
    public IReadOnlyList<string>? Labels { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
