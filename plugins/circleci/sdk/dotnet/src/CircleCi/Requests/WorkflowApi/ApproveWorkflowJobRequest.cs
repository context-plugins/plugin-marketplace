using System;

namespace CircleCi.Requests.WorkflowApi;

/// <summary>
/// The inputs of the ApproveWorkflowJob operation.
/// </summary>
public sealed record ApproveWorkflowJobRequest
{
    /// <summary>
    /// The unique identifier of the workflow
    /// </summary>
    public required Guid Id { get; init; }

    /// <summary>
    /// The ID of the approval request to approve
    /// </summary>
    public required Guid ApprovalRequestId { get; init; }
}
