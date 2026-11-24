using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Optional. Source catalog to enrich with child data objects and metadata. This is mainly used to represent SaaS sources databases.
/// </summary>
public record SourceCatalog4
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
