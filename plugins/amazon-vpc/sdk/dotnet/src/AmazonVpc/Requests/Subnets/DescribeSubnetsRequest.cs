using System.Collections.Generic;
using AmazonVpc.Core.Validation.Attributes;

namespace AmazonVpc.Requests.Subnets;

/// <summary>
/// The inputs of the DescribeSubnets operation.
/// </summary>
public sealed record DescribeSubnetsRequest
{
    /// <summary>
    /// The IDs of the subnets to describe
    /// </summary>
    public IReadOnlyList<string>? SubnetId { get; init; }

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
