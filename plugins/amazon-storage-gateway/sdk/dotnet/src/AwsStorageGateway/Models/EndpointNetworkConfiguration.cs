using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record EndpointNetworkConfiguration
{
    /// <summary>
    /// A list of gateway IP addresses on which the associated Amazon FSx file system is available. If multiple file systems are associated with this gateway, this field is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IpAddresses")]
    public IReadOnlyList<string>? IpAddresses { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
