using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Models;

namespace AmazonVpc.Models;

/// <summary>
/// Response from the DescribeSubnets action
/// </summary>
public record DescribeSubnetsResponse
{
    /// <summary>
    /// Information about the subnets
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subnetSet")]
    public IReadOnlyList<Subnet>? SubnetSet { get; init; }

    /// <summary>
    /// Token for the next page of results
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
