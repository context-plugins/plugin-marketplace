using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DescribeDirectConnectGatewayAssociationProposalsRequest
{
    /// <summary>
    /// The ID of the Direct Connect gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnectGatewayId")]
    public string? DirectConnectGatewayId { get; init; }

    /// <summary>
    /// The ID of the proposal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proposalId")]
    public string? ProposalId { get; init; }

    /// <summary>
    /// The ID of the associated gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associatedGatewayId")]
    public string? AssociatedGatewayId { get; init; }

    /// <summary>
    /// The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value. If MaxResults is given a value larger than 100, only 100 results are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// The token for the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
