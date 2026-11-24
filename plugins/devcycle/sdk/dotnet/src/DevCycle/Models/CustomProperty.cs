using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record CustomProperty
{
    /// <summary>
    /// Display name for Custom Property.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// Auto generated key to be used by the API to reference by 'key' rather then _id for CRUD operations.
    /// Must only contain lower-case characters and <c>_</c>, <c>-</c> or <c>.</c>.
    /// </summary>
    [JsonPropertyName("key")]
    [StringLength(100, MinimumLength = 1)]
    [RegularExpression("^[a-z0-9-_.]+$")]
    public required string Key { get; init; }

    /// <summary>
    /// A unique CustomProperty ID
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// The Project owning the Custom Property
    /// </summary>
    [JsonPropertyName("_project")]
    public required string Project { get; init; }

    /// <summary>
    /// ID of the User who created the project
    /// </summary>
    [JsonPropertyName("_createdBy")]
    public required string CreatedBy { get; init; }

    /// <summary>
    /// Custom Property key, must be unique by Project. Only to be used by the SDKs to reference the Custom Property..
    /// </summary>
    [JsonPropertyName("propertyKey")]
    public required string PropertyKey { get; init; }

    /// <summary>
    /// The Custom Property type
    /// </summary>
    [JsonPropertyName("type")]
    public required Type2 Type { get; init; }

    /// <summary>
    /// The date the Project was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The date the Project was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// Schema definition for the custom property.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schema")]
    public PropertySchema? Schema { get; init; }

    /// <summary>
    /// Whether the custom property is in use by a feature
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hasUsage")]
    public bool? HasUsage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
