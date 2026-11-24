using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DescribeDirectConnectGatewayAssociationsResult
{
    /// <summary>
    /// Information about the associations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnectGatewayAssociations")]
    public IReadOnlyList<DirectConnectGatewayAssociation>? DirectConnectGatewayAssociations { get; init; }

    /// <summary>
    /// The token to retrieve the next page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
