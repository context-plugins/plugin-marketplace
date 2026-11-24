using S1.Models;

namespace S1.Requests.Search;

/// <summary>
/// The inputs of the Trending operation.
/// </summary>
public sealed record TrendingOperationRequest
{
    public required TrendingRequest Body { get; init; }
}
