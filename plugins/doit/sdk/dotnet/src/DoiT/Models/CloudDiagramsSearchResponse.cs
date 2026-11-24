using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Search results grouped into three categories.
/// </summary>
public record CloudDiagramsSearchResponse
{
    /// <summary>
    /// Diagram layers (cloud accounts) matching the query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheme")]
    public IReadOnlyList<CloudDiagramSchemeSearchItem>? Scheme { get; init; }

    /// <summary>
    /// Components matching the query by name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("component")]
    public IReadOnlyList<CloudDiagramComponentSearchItem>? Component { get; init; }

    /// <summary>
    /// Components matching the query by property values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prop")]
    public IReadOnlyList<CloudDiagramComponentSearchItem>? Prop { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
