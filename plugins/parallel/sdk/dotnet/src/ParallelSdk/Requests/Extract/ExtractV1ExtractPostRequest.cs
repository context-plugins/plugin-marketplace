using ParallelSdk.Models;

namespace ParallelSdk.Requests.Extract;

/// <summary>
/// The inputs of the ExtractV1ExtractPost operation.
/// </summary>
public sealed record ExtractV1ExtractPostRequest
{
    public required V1ExtractRequest Body { get; init; }
}
