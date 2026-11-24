using System;
using CircleCi.Models;

namespace CircleCi.Requests.WorkflowApi;

/// <summary>
/// The inputs of the RerunWorkflow operation.
/// </summary>
public sealed record RerunWorkflowRequest
{
    /// <summary>
    /// The unique identifier of the workflow
    /// </summary>
    public required Guid Id { get; init; }

    public WorkflowRerunRequest? Body { get; init; }
}
