using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Version of the API proxy configuration schema to which the API proxy conforms. Currently, the only supported value is 4.0 (<c>majorVersion.minorVersion</c>). This setting may be used in the future to track the evolution of the API proxy format.
/// </summary>
public record GoogleCloudApigeeV1ConfigVersion3
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
