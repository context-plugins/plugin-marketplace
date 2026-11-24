using System;

namespace CircleCi.Requests.PipelineApi;

/// <summary>
/// The inputs of the GetPipeline operation.
/// </summary>
public sealed record GetPipelineRequest
{
    /// <summary>
    /// The unique identifier of the pipeline
    /// </summary>
    public required Guid PipelineId { get; init; }
}
