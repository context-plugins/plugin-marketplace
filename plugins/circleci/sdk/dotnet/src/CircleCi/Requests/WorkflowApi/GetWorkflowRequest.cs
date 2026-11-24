using System;

namespace CircleCi.Requests.WorkflowApi;

/// <summary>
/// The inputs of the GetWorkflow operation.
/// </summary>
public sealed record GetWorkflowRequest
{
    /// <summary>
    /// The unique identifier of the workflow
    /// </summary>
    public required Guid Id { get; init; }
}
