using ParallelSdk.Models;

namespace ParallelSdk.Requests.MemoryApi;

/// <summary>
/// The inputs of the EvictMemorySourceV1BetaMemoryEvictPost operation.
/// </summary>
public sealed record EvictMemorySourceV1BetaMemoryEvictPostRequest
{
    public required MemoryEvictRequest Body { get; init; }
}
