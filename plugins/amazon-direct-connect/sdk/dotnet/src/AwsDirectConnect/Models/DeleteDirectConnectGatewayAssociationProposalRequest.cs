using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DeleteDirectConnectGatewayAssociationProposalRequest
{
    /// <summary>
    /// The ID of the proposal.
    /// </summary>
    [JsonPropertyName("proposalId")]
    public required string ProposalId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
