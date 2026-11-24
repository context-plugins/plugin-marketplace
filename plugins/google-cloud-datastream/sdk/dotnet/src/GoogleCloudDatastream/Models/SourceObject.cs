using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Source object.
/// </summary>
public record SourceObject
{
    /// <summary>
    /// Optional. Source properties. When unspecified as part of include objects, includes everything, when unspecified as part of exclude objects, excludes nothing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public IReadOnlyList<SourceProperty>? Properties { get; init; }

    /// <summary>
    /// Required. The object name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("objectName")]
    public string? ObjectName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
