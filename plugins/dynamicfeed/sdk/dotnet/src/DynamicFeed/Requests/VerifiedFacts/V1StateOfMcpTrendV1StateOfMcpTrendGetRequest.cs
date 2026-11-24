using DynamicFeed.Core.Validation.Attributes;

namespace DynamicFeed.Requests.VerifiedFacts;

/// <summary>
/// The inputs of the V1StateOfMcpTrendV1StateOfMcpTrendGet operation.
/// </summary>
public sealed record V1StateOfMcpTrendV1StateOfMcpTrendGetRequest
{
    [Minimum(1)]
    [Maximum(1825)]
    public int Days { get; init; } = 365;
}
