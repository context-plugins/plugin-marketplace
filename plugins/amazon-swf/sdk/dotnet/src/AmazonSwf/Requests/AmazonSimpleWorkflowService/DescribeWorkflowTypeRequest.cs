using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the DescribeWorkflowType operation.
/// </summary>
public sealed record DescribeWorkflowTypeRequest
{
    public required XAmzTarget23 XAmzTarget { get; init; }
}
