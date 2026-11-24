using System.Text.Json.Serialization;
using Boomi.Core.Models;
using Boomi.Models.Enums;

namespace Boomi.Models;

/// <summary>
/// A field definition within a data model schema.
/// </summary>
public record ModelField
{
    /// <summary>
    /// Field name used as the identifier.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Data type of the field.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeBoomiDataHubModelsApi Type { get; init; }

    /// <summary>
    /// Whether this field is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("required")]
    public bool? Required { get; init; }

    /// <summary>
    /// Whether this field must be unique across records.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unique")]
    public bool? Unique { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
