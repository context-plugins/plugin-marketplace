using CircleCi.Models;

namespace CircleCi.Requests.PipelineApi;

/// <summary>
/// The inputs of the ContinuePipeline operation.
/// </summary>
public sealed record ContinuePipelineRequest
{
    public required PipelineContinueRequest Body { get; init; }
}
