using AmazonSwf.Models.Enums;

namespace AmazonSwf.Requests.AmazonSimpleWorkflowService;

/// <summary>
/// The inputs of the DescribeActivityType operation.
/// </summary>
public sealed record DescribeActivityTypeRequest
{
    public required XAmzTarget20 XAmzTarget { get; init; }
}
