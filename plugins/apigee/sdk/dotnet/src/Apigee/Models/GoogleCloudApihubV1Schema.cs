using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The schema details derived from the spec. Currently, this entity is supported for OpenAPI spec only. For OpenAPI spec, this maps to the schema defined in the <c>definitions</c> section for OpenAPI 2.0 version and in <c>components.schemas</c> section for OpenAPI 3.0 and 3.1 version.
/// </summary>
public record GoogleCloudApihubV1Schema
{
    /// <summary>
    /// Output only. The raw value of the schema definition corresponding to the schema name in the spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rawValue")]
    public string? RawValue { get; init; }

    /// <summary>
    /// Output only. The display name of the schema. This will map to the name of the schema in the spec.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
