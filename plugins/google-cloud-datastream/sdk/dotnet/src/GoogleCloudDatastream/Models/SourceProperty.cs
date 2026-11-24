using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Source property.
/// </summary>
public record SourceProperty
{
    /// <summary>
    /// Required. The property name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("propertyName")]
    public string? PropertyName { get; init; }

    /// <summary>
    /// Optional. Whether or not the property is a primary key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primaryKey")]
    public bool? PrimaryKey { get; init; }

    /// <summary>
    /// Optional. Source properties. When specified, it means that the current property contains nested properties of its own. When unspecified as part of include objects, includes everything, when unspecified as part of exclude objects, excludes nothing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public IReadOnlyList<SourceProperty>? Properties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
