using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Enriched source catalog. This is mainly used to represent SaaS sources databases.
/// </summary>
public record SourceCatalog3
{
    /// <summary>
    /// Optional. Source objects in the catalog.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("objects")]
    public IReadOnlyList<SourceObject>? Objects { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
