using ParallelSdk.Models;

namespace ParallelSdk.Requests.MemoryApi;

/// <summary>
/// The inputs of the ClearMemoryV1BetaMemoryClearPost operation.
/// </summary>
public sealed record ClearMemoryV1BetaMemoryClearPostRequest
{
    public required MemoryClearRequest Body { get; init; }
}
