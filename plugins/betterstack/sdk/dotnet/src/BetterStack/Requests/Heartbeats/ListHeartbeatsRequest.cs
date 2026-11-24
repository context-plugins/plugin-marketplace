using BetterStack.Core.Validation.Attributes;

namespace BetterStack.Requests.Heartbeats;

/// <summary>
/// The inputs of the ListHeartbeats operation.
/// </summary>
public sealed record ListHeartbeatsRequest
{
    [Minimum(1)]
    [Maximum(50)]
    public int? PerPage { get; init; }

    [Minimum(1)]
    public int? Page { get; init; }
}
