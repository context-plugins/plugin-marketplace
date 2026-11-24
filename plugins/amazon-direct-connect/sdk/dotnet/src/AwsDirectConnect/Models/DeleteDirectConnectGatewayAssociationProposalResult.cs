using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DeleteDirectConnectGatewayAssociationProposalResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnectGatewayAssociationProposal")]
    public DirectConnectGatewayAssociationProposal? DirectConnectGatewayAssociationProposal { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
