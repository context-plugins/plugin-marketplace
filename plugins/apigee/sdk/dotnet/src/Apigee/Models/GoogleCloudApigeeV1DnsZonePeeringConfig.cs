using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Fields for DNS PEERING zone.
/// </summary>
public record GoogleCloudApigeeV1DnsZonePeeringConfig
{
    /// <summary>
    /// Required. The ID of the project that contains the producer VPC network.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetProjectId")]
    public string? TargetProjectId { get; init; }

    /// <summary>
    /// Required. The VPC network where the records for that private DNS zone's namespace are available. Apigee will be performing DNS peering with this VPC network.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetNetworkId")]
    public string? TargetNetworkId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
