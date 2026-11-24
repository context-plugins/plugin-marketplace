using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record AllocateConnectionOnInterconnectRequest
{
    /// <summary>
    /// The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, and 10Gbps. Note that only those Direct Connect Partners who have met specific requirements are allowed to create a 1Gbps, 2Gbps, 5Gbps or 10Gbps hosted connection.
    /// </summary>
    [JsonPropertyName("bandwidth")]
    public required string Bandwidth { get; init; }

    /// <summary>
    /// The name of the provisioned connection.
    /// </summary>
    [JsonPropertyName("connectionName")]
    public required string ConnectionName { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services account of the customer for whom the connection will be provisioned.
    /// </summary>
    [JsonPropertyName("ownerAccount")]
    public required string OwnerAccount { get; init; }

    /// <summary>
    /// The ID of the interconnect on which the connection will be provisioned.
    /// </summary>
    [JsonPropertyName("interconnectId")]
    public required string InterconnectId { get; init; }

    /// <summary>
    /// The dedicated VLAN provisioned to the connection.
    /// </summary>
    [JsonPropertyName("vlan")]
    public required int Vlan { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
