using Search1Api.Models;

namespace Search1Api.Requests.Search;

/// <summary>
/// The inputs of the Trending operation.
/// </summary>
public sealed record TrendingOperationRequest
{
    public required TrendingRequest Body { get; init; }
}
