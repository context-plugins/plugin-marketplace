using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record AcceptDirectConnectGatewayAssociationProposalRequest
{
    /// <summary>
    /// The ID of the Direct Connect gateway.
    /// </summary>
    [JsonPropertyName("directConnectGatewayId")]
    public required string DirectConnectGatewayId { get; init; }

    /// <summary>
    /// The ID of the request proposal.
    /// </summary>
    [JsonPropertyName("proposalId")]
    public required string ProposalId { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services account that owns the virtual private gateway or transit gateway.
    /// </summary>
    [JsonPropertyName("associatedGatewayOwnerAccount")]
    public required string AssociatedGatewayOwnerAccount { get; init; }

    /// <summary>
    /// Overrides the Amazon VPC prefixes advertised to the Direct Connect gateway. For information about how to set the prefixes, see Allowed Prefixes in the Direct Connect User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overrideAllowedPrefixesToDirectConnectGateway")]
    public IReadOnlyList<RouteFilterPrefix>? OverrideAllowedPrefixesToDirectConnectGateway { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
