using DynamicFeed.Core.Validation.Attributes;

namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1BenchmarkHistoryV1BenchmarkHistoryGet operation.
/// </summary>
public sealed record V1BenchmarkHistoryV1BenchmarkHistoryGetRequest
{
    [Minimum(1)]
    [Maximum(365)]
    public int Days { get; init; } = 90;
}
