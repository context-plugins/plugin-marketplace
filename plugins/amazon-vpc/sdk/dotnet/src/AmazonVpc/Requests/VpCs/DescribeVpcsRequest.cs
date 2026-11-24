using System.Collections.Generic;
using AmazonVpc.Core.Validation.Attributes;

namespace AmazonVpc.Requests.VpCs;

/// <summary>
/// The inputs of the DescribeVpcs operation.
/// </summary>
public sealed record DescribeVpcsRequest
{
    /// <summary>
    /// The IDs of the VPCs to describe
    /// </summary>
    public IReadOnlyList<string>? VpcId { get; init; }

    /// <summary>
    /// Filters to apply to the results
    /// </summary>
    public IReadOnlyList<string>? Filter { get; init; }

    /// <summary>
    /// Maximum number of results to return
    /// </summary>
    [Minimum(5)]
    [Maximum(1000)]
    public int? MaxResults { get; init; }

    /// <summary>
    /// Token for the next page of results
    /// </summary>
    public string? NextToken { get; init; }
}
