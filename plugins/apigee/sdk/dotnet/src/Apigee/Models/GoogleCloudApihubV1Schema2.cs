using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Output only. The value of a schema definition.
/// </summary>
public record GoogleCloudApihubV1Schema2
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
