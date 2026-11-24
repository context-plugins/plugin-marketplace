using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record AllocateHostedConnectionRequest
{
    /// <summary>
    /// The ID of the interconnect or LAG.
    /// </summary>
    [JsonPropertyName("connectionId")]
    public required string ConnectionId { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services account ID of the customer for the connection.
    /// </summary>
    [JsonPropertyName("ownerAccount")]
    public required string OwnerAccount { get; init; }

    /// <summary>
    /// The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, 10Gbps, and 25Gbps. Note that only those Direct Connect Partners who have met specific requirements are allowed to create a 1Gbps, 2Gbps, 5Gbps, 10Gbps, or 25Gbps hosted connection.
    /// </summary>
    [JsonPropertyName("bandwidth")]
    public required string Bandwidth { get; init; }

    /// <summary>
    /// The name of the hosted connection.
    /// </summary>
    [JsonPropertyName("connectionName")]
    public required string ConnectionName { get; init; }

    /// <summary>
    /// The dedicated VLAN provisioned to the hosted connection.
    /// </summary>
    [JsonPropertyName("vlan")]
    public required int Vlan { get; init; }

    /// <summary>
    /// The tags associated with the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
