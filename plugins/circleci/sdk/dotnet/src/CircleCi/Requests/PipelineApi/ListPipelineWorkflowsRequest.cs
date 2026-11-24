using System;

namespace CircleCi.Requests.PipelineApi;

/// <summary>
/// The inputs of the ListPipelineWorkflows operation.
/// </summary>
public sealed record ListPipelineWorkflowsRequest
{
    /// <summary>
    /// The unique identifier of the pipeline
    /// </summary>
    public required Guid PipelineId { get; init; }

    /// <summary>
    /// Token for retrieving the next page of results
    /// </summary>
    public string? PageToken { get; init; }
}
