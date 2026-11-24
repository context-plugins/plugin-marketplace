using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record CreateCustomPropertyDto
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
    /// Type of the Custom Propety. Must be one of: "Boolean", "Number" or "String"
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeDevCycleManagementCustomPropertiesApi Type { get; init; }

    /// <summary>
    /// Custom Property key, must be unique by Project. Only to be used by the SDKs to reference the Custom Property..
    /// </summary>
    [JsonPropertyName("propertyKey")]
    public required string PropertyKey { get; init; }

    /// <summary>
    /// Schema definition for the custom property.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schema")]
    public PropertySchema? Schema { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
