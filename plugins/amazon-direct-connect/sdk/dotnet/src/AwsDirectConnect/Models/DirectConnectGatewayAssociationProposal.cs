using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record DirectConnectGatewayAssociationProposal
{
    /// <summary>
    /// The ID of the association proposal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proposalId")]
    public string? ProposalId { get; init; }

    /// <summary>
    /// The ID of the Direct Connect gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnectGatewayId")]
    public string? DirectConnectGatewayId { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services account that owns the Direct Connect gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnectGatewayOwnerAccount")]
    public string? DirectConnectGatewayOwnerAccount { get; init; }

    /// <summary>
    /// The state of the proposal. The following are possible values: accepted: The proposal has been accepted. The Direct Connect gateway association is available to use in this state. deleted: The proposal has been deleted by the owner that made the proposal. The Direct Connect gateway association cannot be used in this state. requested: The proposal has been requested. The Direct Connect gateway association cannot be used in this state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proposalState")]
    public ProposalState? ProposalState { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associatedGateway")]
    public AssociatedGateway? AssociatedGateway { get; init; }

    /// <summary>
    /// The existing Amazon VPC prefixes advertised to the Direct Connect gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("existingAllowedPrefixesToDirectConnectGateway")]
    public IReadOnlyList<RouteFilterPrefix>? ExistingAllowedPrefixesToDirectConnectGateway { get; init; }

    /// <summary>
    /// The Amazon VPC prefixes to advertise to the Direct Connect gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestedAllowedPrefixesToDirectConnectGateway")]
    public IReadOnlyList<RouteFilterPrefix>? RequestedAllowedPrefixesToDirectConnectGateway { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
