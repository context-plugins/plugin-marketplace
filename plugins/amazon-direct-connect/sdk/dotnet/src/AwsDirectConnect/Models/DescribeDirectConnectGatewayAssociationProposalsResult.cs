using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DescribeDirectConnectGatewayAssociationProposalsResult
{
    /// <summary>
    /// Describes the Direct Connect gateway association proposals.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnectGatewayAssociationProposals")]
    public IReadOnlyList<DirectConnectGatewayAssociationProposal>? DirectConnectGatewayAssociationProposals { get; init; }

    /// <summary>
    /// The token to use to retrieve the next page of results. This value is null when there are no more results to return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
