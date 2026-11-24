using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the DescribeWorkflowExecution operation.
/// </summary>
public sealed record DescribeWorkflowExecutionRequest
{
    public required XAmzTarget29 XAmzTarget { get; init; }
}
