using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Spanner database structure.
/// </summary>
public record SpannerDatabase
{
    /// <summary>
    /// Optional. Spanner schemas in the database.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schemas")]
    public IReadOnlyList<SpannerSchema>? Schemas { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
