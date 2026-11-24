using System;

namespace CircleCi.Requests.WorkflowApi;

/// <summary>
/// The inputs of the CancelWorkflow operation.
/// </summary>
public sealed record CancelWorkflowRequest
{
    /// <summary>
    /// The unique identifier of the workflow
    /// </summary>
    public required Guid Id { get; init; }
}
