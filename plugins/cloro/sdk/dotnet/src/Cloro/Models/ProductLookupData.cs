using System.Collections.Generic;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

/// <summary>
/// Structured product lookup query data
/// </summary>
public record ProductLookupData
{
    /// <summary>
    /// Search query used for this product
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("request_query")]
    public string? RequestQuery { get; init; }

    /// <summary>
    /// Provider-to-ID mapping
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("all_ids")]
    public IReadOnlyDictionary<string, object>? AllIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata_sources")]
    public IReadOnlyList<string>? MetadataSources { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
