using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Models;

namespace AmazonVpc.Models;

/// <summary>
/// Response from the DescribeVpcs action
/// </summary>
public record DescribeVpcsResponse
{
    /// <summary>
    /// Information about the VPCs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpcSet")]
    public IReadOnlyList<Vpc>? VpcSet { get; init; }

    /// <summary>
    /// Token for the next page of results
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
