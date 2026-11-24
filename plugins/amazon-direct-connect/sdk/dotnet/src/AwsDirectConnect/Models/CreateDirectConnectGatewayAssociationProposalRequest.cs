using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record CreateDirectConnectGatewayAssociationProposalRequest
{
    /// <summary>
    /// The ID of the Direct Connect gateway.
    /// </summary>
    [JsonPropertyName("directConnectGatewayId")]
    public required string DirectConnectGatewayId { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services account that owns the Direct Connect gateway.
    /// </summary>
    [JsonPropertyName("directConnectGatewayOwnerAccount")]
    public required string DirectConnectGatewayOwnerAccount { get; init; }

    /// <summary>
    /// The ID of the virtual private gateway or transit gateway.
    /// </summary>
    [JsonPropertyName("gatewayId")]
    public required string GatewayId { get; init; }

    /// <summary>
    /// The Amazon VPC prefixes to advertise to the Direct Connect gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addAllowedPrefixesToDirectConnectGateway")]
    public IReadOnlyList<RouteFilterPrefix>? AddAllowedPrefixesToDirectConnectGateway { get; init; }

    /// <summary>
    /// The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("removeAllowedPrefixesToDirectConnectGateway")]
    public IReadOnlyList<RouteFilterPrefix>? RemoveAllowedPrefixesToDirectConnectGateway { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
