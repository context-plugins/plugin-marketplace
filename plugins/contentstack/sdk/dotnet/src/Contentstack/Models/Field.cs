using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// A field definition within a content type schema.
/// </summary>
public record Field
{
    /// <summary>
    /// Unique identifier of the field within the content type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// The data type of the field. Common values: text, number, boolean, date, file, link, json, reference, global_field, group, blocks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data_type")]
    public string? DataType { get; init; }

    /// <summary>
    /// Human-readable label for the field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("display_name")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Indicates whether the field is required for entry creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mandatory")]
    public bool? Mandatory { get; init; }

    /// <summary>
    /// Indicates whether field values must be unique across entries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unique")]
    public bool? Unique { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
