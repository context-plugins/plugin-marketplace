using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the RequestCancelWorkflowExecution operation.
/// </summary>
public sealed record RequestCancelWorkflowExecutionRequest
{
    public required XAmzTarget10 XAmzTarget { get; init; }
}
