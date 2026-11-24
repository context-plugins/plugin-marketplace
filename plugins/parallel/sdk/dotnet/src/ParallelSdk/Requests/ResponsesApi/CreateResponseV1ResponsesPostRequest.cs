using ParallelSdk.Models;

namespace ParallelSdk.Requests.ResponsesApi;

/// <summary>
/// The inputs of the CreateResponseV1ResponsesPost operation.
/// </summary>
public sealed record CreateResponseV1ResponsesPostRequest
{
    public required ResponseCreateRequest Body { get; init; }
}
