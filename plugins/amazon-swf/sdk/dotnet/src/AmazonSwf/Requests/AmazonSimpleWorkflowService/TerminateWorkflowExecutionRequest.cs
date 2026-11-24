using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the TerminateWorkflowExecution operation.
/// </summary>
public sealed record TerminateWorkflowExecutionRequest
{
    public required XAmzTarget16 XAmzTarget { get; init; }
}
