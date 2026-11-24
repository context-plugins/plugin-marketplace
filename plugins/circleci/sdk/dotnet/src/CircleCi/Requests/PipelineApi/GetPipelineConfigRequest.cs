using System;

namespace CircleCi.Requests.PipelineApi;

/// <summary>
/// The inputs of the GetPipelineConfig operation.
/// </summary>
public sealed record GetPipelineConfigRequest
{
    /// <summary>
    /// The unique identifier of the pipeline
    /// </summary>
    public required Guid PipelineId { get; init; }
}
