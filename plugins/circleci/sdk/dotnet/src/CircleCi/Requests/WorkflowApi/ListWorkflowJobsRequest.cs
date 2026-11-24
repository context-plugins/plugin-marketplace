using System;

namespace CircleCi.Requests.WorkflowApi;

/// <summary>
/// The inputs of the ListWorkflowJobs operation.
/// </summary>
public sealed record ListWorkflowJobsRequest
{
    /// <summary>
    /// The unique identifier of the workflow
    /// </summary>
    public required Guid Id { get; init; }
}
