using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Version of the API proxy configuration schema. Currently, only 4.0 is supported.
/// </summary>
public record GoogleCloudApigeeV1ConfigVersion
{
    /// <summary>
    /// Major version of the API proxy configuration schema.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("majorVersion")]
    public int? MajorVersion { get; init; }

    /// <summary>
    /// Minor version of the API proxy configuration schema.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minorVersion")]
    public int? MinorVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
