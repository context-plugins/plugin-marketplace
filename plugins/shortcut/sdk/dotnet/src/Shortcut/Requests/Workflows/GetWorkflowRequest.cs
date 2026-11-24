namespace Shortcut.Requests.Workflows;

/// <summary>
/// The inputs of the GetWorkflow operation.
/// </summary>
public sealed record GetWorkflowRequest
{
    /// <summary>
    /// The ID of the Workflow.
    /// </summary>
    public required long WorkflowPublicId { get; init; }
}
