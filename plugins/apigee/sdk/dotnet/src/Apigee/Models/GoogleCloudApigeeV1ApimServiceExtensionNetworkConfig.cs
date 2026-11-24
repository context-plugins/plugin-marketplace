using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Network configuration for the APIM service extension.
/// </summary>
public record GoogleCloudApigeeV1ApimServiceExtensionNetworkConfig
{
    /// <summary>
    /// Required. The subnet for the PSC NEG. Format: projects/{project}/regions/{region}/subnetworks/{subnet}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subnet")]
    public string? Subnet { get; init; }

    /// <summary>
    /// Required. The region for the PSC NEG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    public string? Region { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
