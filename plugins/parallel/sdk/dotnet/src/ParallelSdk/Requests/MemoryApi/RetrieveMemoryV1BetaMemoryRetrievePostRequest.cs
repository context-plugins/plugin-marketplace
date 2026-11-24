using ParallelSdk.Models;

namespace ParallelSdk.Requests.MemoryApi;

/// <summary>
/// The inputs of the RetrieveMemoryV1BetaMemoryRetrievePost operation.
/// </summary>
public sealed record RetrieveMemoryV1BetaMemoryRetrievePostRequest
{
    public required MemoryRetrieveRequest Body { get; init; }
}
