using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the StartWorkflowExecution operation.
/// </summary>
public sealed record StartWorkflowExecutionRequest
{
    public required XAmzTarget30 XAmzTarget { get; init; }
}
