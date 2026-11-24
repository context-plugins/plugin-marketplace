using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DescribeDirectConnectGatewaysResult
{
    /// <summary>
    /// The Direct Connect gateways.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directConnectGateways")]
    public IReadOnlyList<DirectConnectGateway>? DirectConnectGateways { get; init; }

    /// <summary>
    /// The token to retrieve the next page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
