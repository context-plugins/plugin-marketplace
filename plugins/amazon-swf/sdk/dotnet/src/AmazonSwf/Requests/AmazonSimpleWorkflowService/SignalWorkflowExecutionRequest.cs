using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the SignalWorkflowExecution operation.
/// </summary>
public sealed record SignalWorkflowExecutionRequest
{
    public required XAmzTarget15 XAmzTarget { get; init; }
}
