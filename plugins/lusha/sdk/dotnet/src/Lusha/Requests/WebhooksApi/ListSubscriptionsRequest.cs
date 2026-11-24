using Lusha.Core.Validation.Attributes;

namespace Lusha.Requests.WebhooksApi;

/// <summary>
/// The inputs of the ListSubscriptions operation.
/// </summary>
public sealed record ListSubscriptionsRequest
{
    /// <summary>
    /// Maximum number of results (1-100)
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 10;

    /// <summary>
    /// Number of results to skip
    /// </summary>
    [Minimum(0)]
    public int Offset { get; init; } = 0;
}
