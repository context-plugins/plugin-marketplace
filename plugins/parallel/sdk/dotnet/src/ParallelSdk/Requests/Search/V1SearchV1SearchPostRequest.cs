using ParallelSdk.Models;

namespace ParallelSdk.Requests.Search;

/// <summary>
/// The inputs of the V1SearchV1SearchPost operation.
/// </summary>
public sealed record V1SearchV1SearchPostRequest
{
    public required V1SearchRequest Body { get; init; }
}
