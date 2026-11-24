using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record ContainsPiiEntitiesResponse
{
    /// <summary>
    /// The labels used in the document being analyzed. Individual labels represent personally identifiable information (PII) entity types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Labels")]
    public IReadOnlyList<EntityLabel>? Labels { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
