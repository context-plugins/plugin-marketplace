using System.Text.Json.Serialization;
using Contentstack.Core.Models;
using Contentstack.Models.Enums;

namespace Contentstack.Models;

/// <summary>
/// Parameters for creating or updating an attribute.
/// </summary>
public record CreateAttributeRequest
{
    /// <summary>
    /// Display name for the attribute.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Machine-readable key for the attribute.
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// Data type of the attribute.
    /// </summary>
    [JsonPropertyName("data_type")]
    public required DataTypeEnum DataType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
